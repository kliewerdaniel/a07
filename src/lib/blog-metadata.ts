import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { getAllPosts } from "@/lib/blog";

export async function generateBlogMetadata(slug: string): Promise<Metadata> {
  const { getAllPosts } = await import("@/lib/blog");
  const posts = getAllPosts();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: `Post Not Found — ${siteConfig.name}`,
    };
  }

  const url = `${siteConfig.url}/blog/${slug}`;

  return {
    title: `${post.title} — ${siteConfig.name}`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      type: "article",
      publishedTime: post.date,
      tags: post.tags,
      images: post.coverImage
        ? [{ url: `${siteConfig.url}${post.coverImage}`, width: 1200, height: 630 }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
    alternates: { canonical: url },
  };
}
