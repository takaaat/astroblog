import { getCollection } from "astro:content";
import type { CollectionEntry } from "astro:content";

/**
 * 全てのブログ投稿を公開日順（新しい順）で取得
 */
export async function getAllPostsSorted(): Promise<CollectionEntry<'blog'>[]> {
  const allPosts = await getCollection("blog");
  return allPosts.sort(
    (a, b) =>
      new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime()
  );
}

/**
 * 最新のブログ投稿を指定された件数まで取得
 */
export async function getRecentPosts(count: number = 5): Promise<CollectionEntry<'blog'>[]> {
  const allPosts = await getAllPostsSorted();
  return allPosts.slice(0, count);
}