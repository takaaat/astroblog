import { glob } from "astro/loaders";
import { z, defineCollection } from "astro:content";
const blog = defineCollection({
    loader: glob({ pattern: '**/index.md', base: "./src/blog" }),
    schema: ({ image }) => z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      category: z.string(),
      tags: z.array(z.string()),
      thumbnail: image()
    })
});
export const collections = { blog };
