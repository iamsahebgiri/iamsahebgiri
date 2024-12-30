import type { Loader, LoaderContext } from "astro/loaders";
import { z } from "astro:content";
import type { Item } from "../types";

export function raindropLoader(options: {
  collectionId: string;
  accessToken: string;
}): Loader {
  const { collectionId, accessToken } = options;
  return {
    name: "raindrop-loader",
    load: async (context: LoaderContext): Promise<void> => {
      const { store, logger, parseData, generateDigest } = context;
      store.clear();
      logger.info(`Loading raindrop collection ${collectionId}`);
      const raindrops = await getRaindrops(collectionId, accessToken);
      for (const item of raindrops) {
        const data = await parseData({
          id: item._id.toString(),
          data: {
            ...item
          },
        });
        const digest = generateDigest(data);
        store.set({
          id: item._id.toString(),
          data,
          digest,
          body: item.excerpt ?? "",
        });
      }
    },
    schema: async () =>
      z.object({
        _id: z.number(),
        link: z.string(),
        title: z.string(),
        excerpt: z.string(),
        note: z.string(),
        type: z.string(),
        cover: z.string(),
        media: z.array(z.any()),
        tags: z.array(z.any()),
        important: z.boolean(),
        removed: z.boolean(),
        created: z.string(),
        lastUpdate: z.string(),
        highlights: z.array(z.any()),
        domain: z.string(),
        sort: z.number(),
        collectionId: z.number(),
      }),
  };
}
async function getRaindrops(
  collectionId: string,
  accessToken: string
): Promise<Item[]> {
  const url = `https://api.raindrop.io/rest/v1/raindrops/${collectionId}`;

  const headers = new Headers({
    Authorization: `Bearer ${accessToken}`,
  });

  try {
    const response = await fetch(url, {
      headers,
    });

    if (response.ok) {
      const data: { items: Item[] } = await response.json();
      return data.items;
    } else {
      console.error(`Error fetching raindrop: ${response.statusText}`);
    }
  } catch (error) {
    console.error("Error fetching raindrop:", error);
  }

  return [];
}
