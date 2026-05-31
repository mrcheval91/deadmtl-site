import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const dispatch = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/dispatch' }),
  schema: z.object({
    title:   z.string(),
    slug:    z.string(),
    date:    z.string(),
    zone:    z.string(),
    signal:  z.string(),
    status:  z.string(),
    excerpt: z.string(),
  }),
});

export const collections = { dispatch };
