import fs from "fs";
import path from "path";

export interface BlogFrontmatter {
  title: string;
  date: string;
  tags?: string[];
  excerpt?: string;
  coverImage?: string;
  published?: boolean;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  readingTime: string;
  coverImage?: string;
}

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

function parseFrontmatter(content: string): { data: Record<string, unknown>; content: string } {
  const lines = content.split("\n");
  if (lines[0]?.trim() !== "---") {
    return { data: {}, content };
  }
  const endIndex = lines.indexOf("---", 1);
  if (endIndex === -1) {
    return { data: {}, content };
  }
  const frontmatterLines = lines.slice(1, endIndex);
  const data: Record<string, unknown> = {};
  for (const line of frontmatterLines) {
    const colonIndex = line.indexOf(":");
    if (colonIndex !== -1) {
      const key = line.slice(0, colonIndex).trim();
      let value: unknown = line.slice(colonIndex + 1).trim();
      if (typeof value === "string") {
        value = value.replace(/^["']|["']$/g, "");
      }
      data[key] = value;
    }
  }
  return {
    data,
    content: lines.slice(endIndex + 1).join("\n"),
  };
}

function parseTagList(value: unknown): string[] {
  const tags: string[] = [];
  if (Array.isArray(value)) {
    for (const t of value as string[]) {
      const cleaned = String(t).trim().replace(/["']/g, "");
      if (cleaned && !tags.includes(cleaned)) tags.push(cleaned);
    }
    return tags;
  }
  if (typeof value === "string") {
    for (const t of value.replace(/[[\]]/g, "").split(",")) {
      const cleaned = t.trim().replace(/["']/g, "");
      if (cleaned && !tags.includes(cleaned)) tags.push(cleaned);
    }
    return tags;
  }
  return [];
}

function estimateReadingTime(text: string): string {
  const wpm = 200;
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wpm);
  return `${minutes} min read`;
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));

  const posts: BlogPost[] = [];

  for (const file of files) {
    const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf-8");
    const { data, content } = parseFrontmatter(raw);
    const slug = file.replace(/\.md$/, "");

    const frontmatter = data as unknown as BlogFrontmatter;

    const published = frontmatter.published !== false;

    posts.push({
      slug,
      title: frontmatter.title || slug,
      date: frontmatter.date || "2025-01-01",
      tags: frontmatter.tags ? parseTagList(frontmatter.tags) : [],
      excerpt: frontmatter.excerpt || content.slice(0, 200).replace(/#|`|\*|\[|\]/g, "").trim() + "...",
      readingTime: estimateReadingTime(content),
      coverImage: frontmatter.coverImage,
    });
  }

  return posts
    .filter((p) => p.slug !== "privacy-policy")
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): { post: BlogPost | null; content: string } {
  try {
    const filePath = path.join(BLOG_DIR, `${slug}.md`);
    if (!fs.existsSync(filePath)) return { post: null, content: "" };

    const raw = fs.readFileSync(filePath, "utf-8");
    const { data, content } = parseFrontmatter(raw);
    const frontmatter = data as unknown as BlogFrontmatter;

    return {
      post: {
        slug,
        title: frontmatter.title || slug,
        date: frontmatter.date || "2025-01-01",
        tags: frontmatter.tags ? parseTagList(frontmatter.tags) : [],
        excerpt: frontmatter.excerpt || content.slice(0, 200).replace(/#|`|\*|\[|\]/g, "").trim() + "...",
        readingTime: estimateReadingTime(content),
        coverImage: frontmatter.coverImage,
      },
      content,
    };
  } catch {
    return { post: null, content: "" };
  }
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""))
    .filter((slug) => slug !== "privacy-policy");
}

export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tagSet = new Set<string>();
  for (const post of posts) {
    for (const tag of post.tags) {
      tagSet.add(tag);
    }
  }
  return Array.from(tagSet).sort();
}
