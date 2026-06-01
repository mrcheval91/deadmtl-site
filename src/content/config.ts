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
    // Optional: message type for taxonomy display
    type: z.enum([
      'server-notice',
      'operator-note',
      'network-dispatch',
      'field-report',
      'research-file',
    ]).optional().default('field-report'),
  }),
});

export const collections = { dispatch };
