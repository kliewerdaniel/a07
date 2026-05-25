import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import type { BlogPost } from "@/lib/blog";

interface WritingPreviewProps {
  posts: BlogPost[];
}

function WritingPreview({ posts }: WritingPreviewProps) {
  if (posts.length === 0) return null;

  return (
    <section className="py-24 md:py-32 border-b border-[var(--color-border)]">
      <Container>
        <Reveal>
          <div className="flex items-center justify-between mb-12">
            <span className="font-mono text-xs tracking-wider uppercase text-[var(--color-text-tertiary)]">
              Field Notes
            </span>
            <Link
              href="/blog"
              className="font-mono text-xs tracking-wider uppercase text-[var(--color-text-tertiary)] hover:text-[var(--color-text)] transition-colors"
            >
              All writing →
            </Link>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.08}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block border border-[var(--color-border)] p-6 hover:bg-[var(--color-surface-elevated)] transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-[10px] text-[var(--color-text-tertiary)] uppercase tracking-wider">
                    {post.date?.split("T")[0] || post.date}
                  </span>
                  <span className="font-mono text-[10px] text-[var(--color-text-tertiary)]">
                    {post.readingTime}
                  </span>
                </div>
                <h3 className="text-lg font-medium mb-2 font-[var(--font-heading)] group-hover:opacity-70 transition-opacity">
                  {post.title}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
                {post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] text-[var(--color-text-tertiary)]"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export { WritingPreview };
