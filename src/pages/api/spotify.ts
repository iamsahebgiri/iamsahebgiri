import type { APIRoute } from "astro";
import { Buffer } from "node:buffer";

export const GET: APIRoute = async () => {
  return new Response(
    JSON.stringify({
      id: "0VpEX8ib3wE7u8NOw4szU6",
      title: "Eyes Off You",
      artist: "PRETTYMUCH",
      thumbnail:
        "https://i.scdn.co/image/ab67616d00004851d46d93ee7fb0589ef6973c5d",
      previewUrl:
        "https://p.scdn.co/mp3-preview/66056f42a4360b94ba012b31918dc538d8c791f9",
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    },
  );
  const SPOTIFY_CLIENT_ID = import.meta.env.SPOTIFY_CLIENT_ID;
  const SPOTIFY_CLIENT_SECRET = import.meta.env.SPOTIFY_CLIENT_SECRET;
  const SPOTIFY_REFRESH_TOKEN = import.meta.env.SPOTIFY_REFRESH_TOKEN; // Generate this once with user consent

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
      },
    );

    const tokenData = await tokenResponse.json();

    if (!tokenResponse.ok) {
      return new Response(
        JSON.stringify({ error: tokenData.error || "Failed to refresh token" }),
        {
          status: tokenResponse.status,
          headers: { "Content-Type": "application/json" },
        },
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
      },
    );

    const likedData = await likedResponse.json();

    if (!likedResponse.ok) {
      return new Response(
        JSON.stringify({
          error: likedData.error || "Failed to get liked tracks",
        }),
        {
          status: likedResponse.status,
          headers: { "Content-Type": "application/json" },
        },
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
      artist: latestTrack.artists.map((artist) => artist.name).join(", "),
      thumbnail: smallestThumbnail,
      previewUrl: latestTrack.preview_url, // 30-second preview
    };

    // if preview url is not available then use the embed to find the preview url
    if (!result.preview_url) {
      const trackId = result.id;
      const SPOTIFY_EMBED_URL = `https://open.spotify.com/embed/track/${trackId}`;

      const embedResponse = await fetch(SPOTIFY_EMBED_URL);

      if (!embedResponse.ok) {
        return new Response(
          JSON.stringify({
            error: `Failed to fetch embed page: ${embedResponse.statusText}`,
          }),
          {
            status: embedResponse.status,
            headers: { "Content-Type": "application/json" },
          },
        );
      }

      const html = await embedResponse.text();

      // Parse the HTML and extract the __NEXT_DATA__ JSON
      const nextDataMatch = html.match(
        /<script id="__NEXT_DATA__" type="application\/json">(.+?)<\/script>/,
      );

      if (!nextDataMatch || nextDataMatch.length < 2) {
        return new Response(
          JSON.stringify({
            error: "__NEXT_DATA__ not found in the embed HTML",
          }),
          { status: 404, headers: { "Content-Type": "application/json" } },
        );
      }

      const nextData = JSON.parse(nextDataMatch[1]);
      const previewUrl =
        nextData?.props?.pageProps?.state?.data?.entity?.audioPreview?.url;
      result.previewUrl = previewUrl;
    }

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
