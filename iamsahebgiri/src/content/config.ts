import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});

const snippet = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		publishedAt: z.string(),
		type: z.string(),
	}),
});

const project = defineCollection({
	type: 'data',
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
	}),
});

export const collections = { blog, snippet, project };
