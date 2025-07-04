// Import the glob loader
import { glob } from "astro/loaders";
import { z, defineCollection } from "astro:content";
const blog = defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: "./src/blog" }),
    schema: z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      category: z.string(),
      tags: z.array(z.string()),
      thumbnail: z.string().optional()
    })
});
export const collections = { blog };