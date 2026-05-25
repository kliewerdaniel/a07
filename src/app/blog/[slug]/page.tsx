import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import { getPostBySlug, getAllSlugs } from "@/lib/blog";
import { generateBlogMetadata } from "@/lib/blog-metadata";
import { renderMarkdown } from "@/lib/markdown";
import { ReadingProgress } from "@/components/blog/reading-progress";
import { CodeCopyButtons } from "@/components/blog/code-copy-buttons";

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return generateBlogMetadata(slug);
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { post, content } = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const html = renderMarkdown(content);

  return (
    <article className="min-h-screen">
      <ReadingProgress />
      <CodeCopyButtons />

      <div className="py-24 md:py-32 border-b border-[var(--color-border)]">
        <Container>
          <div className="max-w-3xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1 font-mono text-xs tracking-wider uppercase text-[var(--color-text-tertiary)] hover:text-[var(--color-text)] transition-colors mb-8"
            >
              ← Back to writing
            </Link>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-6">
              <span className="font-mono text-xs text-[var(--color-text-tertiary)]">
                {post.date?.split("T")[0] || post.date}
              </span>
              <span className="font-mono text-xs text-[var(--color-text-tertiary)]">
                {post.readingTime}
              </span>
              {post.tags.length > 0 && (
                <div className="flex gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] text-[var(--color-text-tertiary)]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium font-[var(--font-heading)] tracking-[-0.03em] leading-[1.1] text-balance">
              {post.title}
            </h1>
          </div>
        </Container>
      </div>

      <div className="py-16 md:py-20">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </Container>
      </div>

      <div className="border-t border-[var(--color-border)] py-12">
        <Container>
          <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1 font-mono text-xs tracking-wider uppercase text-[var(--color-text-tertiary)] hover:text-[var(--color-text)] transition-colors"
            >
              ← Back to all writing
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-1 font-mono text-xs tracking-wider uppercase text-[var(--color-text-tertiary)] hover:text-[var(--color-text)] transition-colors"
            >
              Home →
            </Link>
          </div>
        </Container>
      </div>
    </article>
  );
}
