export interface BlogPost {
  title: string;
  pubDate: string;
  description: string;
  author?: string;
  category?: string;
  tags?: string[];
  thumbnail?: string;
}

export interface ArticleCardProps {
  url: string;
  frontmatter: BlogPost;
}

export interface ArticleThumbnailProps {
  thumbnail?: string;
  title: string;
}

export interface ArticleMetadataProps {
  dateText: string;
  category?: string;
  tags?: string[];
}

export interface TagListProps {
  tags: string[];
  stopPropagation?: boolean;
}

export interface MarkdownPostLayoutProps {
  frontmatter: BlogPost;
  file: string;
  postId: string;
}

export interface CategoryCount {
  name: string;
  count: number;
}

export interface RecentPost {
  id: string;
  data: BlogPost;
}
