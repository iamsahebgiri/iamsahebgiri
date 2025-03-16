import { defineCollection, z } from "astro:content";
import { getSecret } from "astro:env/server";
import { glob } from "astro/loaders";

import { RAINDROP } from "@/consts";
import { raindropLoader } from "@/loaders/raindrop";
import { spotifyLoader } from "@/loaders/spotify";

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  }),
});

const snippets = defineCollection({
  loader: glob({ base: "./src/content/snippets", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    publishedAt: z.string(),
    type: z.string(),
  }),
});

const timelineArticle = defineCollection({
  loader: glob({ base: "./src/content/timelines", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    cover: z.string().optional(),
    date: z.string(),
    link: z.string().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "**/*.json" }),
  schema: z.object({
    id: z.string(),
    image: z.object({
      url: z.string(),
      height: z.string(),
      width: z.string(),
    }),
    title: z.string(),
    description: z.string(),
    link: z.string(),
    tags: z.array(z.string()),
    status: z.string(),
    theme: z.string(),
    featured: z.boolean().optional(),
  }),
});

const raindropAccessToken = getSecret("RAINDROP_TEST_TOKEN");

const books = defineCollection({
  loader: raindropLoader({
    collectionId: RAINDROP.BOOKS_COLLECTION_ID,
    accessToken: raindropAccessToken as string,
  }),
});

const articles = defineCollection({
  loader: raindropLoader({
    collectionId: RAINDROP.ARTICLES_COLLECTION_ID,
    accessToken: raindropAccessToken as string,
  }),
});

const papers = defineCollection({
  loader: raindropLoader({
    collectionId: RAINDROP.PAPERS_COLLECTION_ID,
    accessToken: raindropAccessToken as string,
  }),
});

const spotifyLikedSong = defineCollection({
  loader: spotifyLoader({
    clientId: getSecret("SPOTIFY_CLIENT_ID") as string,
    clientSecret: getSecret("SPOTIFY_CLIENT_SECRET") as string,
    refreshToken: getSecret("SPOTIFY_REFRESH_TOKEN") as string,
  }),
});

export const collections = {
  blog,
  snippets,
  projects,
  books,
  articles,
  papers,
  spotifyLikedSong,
  timelineArticle,
};
