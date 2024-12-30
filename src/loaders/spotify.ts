import type { SpotifySong } from "@/types";
import type { Loader, LoaderContext } from "astro/loaders";
import { z } from "astro:content";
import { Buffer } from "node:buffer";

export function spotifyLoader(options: {
  clientId: string;
  clientSecret: string;
  refreshToken: string;
}): Loader {
  const { clientId, clientSecret, refreshToken } = options;

  return {
    name: "spotify-loader",
    load: async (context: LoaderContext): Promise<void> => {
      const { store, logger, parseData, generateDigest } = context;
      store.clear();
      logger.info(`Loading latest liked song from Spotify`);
      const likedSongReq = await getLatestLikedSong({
        clientId,
        clientSecret,
        refreshToken,
      });
      if (!likedSongReq.ok) {
        const likedSong = await likedSongReq.json() as { error: string };
        logger.error(
          `Failed to load latest liked song from Spotify: ${likedSong?.error}`
        );
        return;
      }
      const likedSong = (await likedSongReq.json()) as SpotifySong;
      const data = await parseData({
        id: likedSong.id,
        data: {
          ...likedSong,
        },
      });

      const digest = generateDigest(data);
      store.set({
        id: likedSong.id,
        data,
        digest,
      });
    },
    schema: async () =>
      z.object({
        id: z.string(),
        title: z.string(),
        artist: z.string(),
        thumbnail: z.string(),
        previewUrl: z.string(),
      }),
  };
}

async function getLatestLikedSong({
  clientId,
  clientSecret,
  refreshToken,
}: {
  clientId: string;
  clientSecret: string;
  refreshToken: string;
}) {
  const SPOTIFY_CLIENT_ID = clientId;
  const SPOTIFY_CLIENT_SECRET = clientSecret;
  const SPOTIFY_REFRESH_TOKEN = refreshToken; // Generate this once with user consent

  try {
    // Step 1: Refresh the access token
    const tokenResponse = await fetch(
      "https://accounts.spotify.com/api/token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${Buffer.from(SPOTIFY_CLIENT_ID + ":" + SPOTIFY_CLIENT_SECRET).toString("base64")}`,
        },
        body: `grant_type=refresh_token&refresh_token=${SPOTIFY_REFRESH_TOKEN}`,
      }
    );

    const tokenData = (await tokenResponse.json()) as any;

    if (!tokenResponse.ok) {
      console.log("Failed to refresh token", tokenData);
      return new Response(
        JSON.stringify({ error: tokenData.error || "Failed to refresh token" }),
        {
          status: tokenResponse.status,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const accessToken = tokenData.access_token;

    // Step 2: Fetch the latest liked song
    const likedResponse = await fetch(
      "https://api.spotify.com/v1/me/tracks?limit=1",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    const likedData = (await likedResponse.json()) as any;

    if (!likedResponse.ok) {
      console.log("Failed to get liked tracks", likedData);
      return new Response(
        JSON.stringify({
          error: likedData.error || "Failed to get liked tracks",
        }),
        {
          status: likedResponse.status,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Parse and return the data
    const latestTrack = likedData.items[0].track;
    const smallestThumbnail = [...latestTrack.album.images]
      .sort((a, b) => a.height * a.width - b.height * b.width)
      .at(0)?.url;

    const result = {
      id: latestTrack.id,
      title: latestTrack.name,
      artist: latestTrack.artists.map((artist: any) => artist.name).join(", "),
      thumbnail: smallestThumbnail,
      previewUrl: latestTrack.preview_url, // 30-second preview
    };

    console.log("Result", result, result.previewUrl == null);

    // if preview url is not available then use the embed to find the preview url
    if (result.previewUrl == null) {
      const trackId = result.id;
      const SPOTIFY_EMBED_URL = `https://open.spotify.com/embed/track/${trackId}`;

      const embedResponse = await fetch(SPOTIFY_EMBED_URL, {
        headers: {
          "user-agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36",
        },
      });

      if (!embedResponse.ok) {
        console.log("Failed to fetch embed page", embedResponse);
        return new Response(
          JSON.stringify({
            error: `Failed to fetch embed page: ${embedResponse.statusText}`,
          }),
          {
            status: embedResponse.status,
            headers: { "Content-Type": "application/json" },
          }
        );
      }

      const html = await embedResponse.text();

      // Parse the HTML and extract the __NEXT_DATA__ JSON
      const nextDataMatch = html.match(
        /<script id="__NEXT_DATA__" type="application\/json">(.+?)<\/script>/
      );

      if (!nextDataMatch || nextDataMatch.length < 2) {
        console.log("Failed to find __NEXT_DATA__ in the embed HTML");
        return new Response(
          JSON.stringify({
            error: "__NEXT_DATA__ not found in the embed HTML",
          }),
          { status: 404, headers: { "Content-Type": "application/json" } }
        );
      }

      const nextData = JSON.parse(nextDataMatch[1]);
      console.log("Next Data", nextData);
      const previewUrl =
        nextData?.props?.pageProps?.state?.data?.entity?.audioPreview?.url;
      result.previewUrl = previewUrl;
    }

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.log("Error", error);
    return new Response(JSON.stringify({ error: (error as any).message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
