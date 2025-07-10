import { getCollection } from "astro:content";
import type { CollectionEntry } from "astro:content";

/**
 * Gets all blog posts sorted by publication date (newest first)
 */
export async function getAllPostsSorted(): Promise<CollectionEntry<'blog'>[]> {
  const allPosts = await getCollection("blog");
  return allPosts.sort(
    (a, b) =>
      new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime()
  );
}

/**
 * Gets recent blog posts (limited to specified count)
 */
export async function getRecentPosts(count: number = 5): Promise<CollectionEntry<'blog'>[]> {
  const allPosts = await getAllPostsSorted();
  return allPosts.slice(0, count);
}