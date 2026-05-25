"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import type { BlogPost } from "@/lib/blog";

interface BlogListClientProps {
  posts: BlogPost[];
  tags: string[];
}

function BlogListClient({ posts, tags }: BlogListClientProps) {
  const [search, setSearch] = useState("");
  const [activeTags, setActiveTags] = useState<Set<string>>(new Set());
  const [showAllTags, setShowAllTags] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);

  const tagCounts = useMemo(() => {
    const counts = new Map<string, number>();
    for (const post of posts) {
      for (const tag of post.tags) {
        counts.set(tag, (counts.get(tag) || 0) + 1);
      }
    }
    return counts;
  }, [posts]);

  const topTags = useMemo(() => {
    return [...tagCounts.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, 20);
  }, [tagCounts]);

  const sortedTags = useMemo(() => {
    return [...tagCounts.entries()].sort((a, b) => b[1] - a[1]);
  }, [tagCounts]);

  const filteredPosts = useMemo(() => {
    let result = posts;

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q)
      );
    }

    if (activeTags.size > 0) {
      result = result.filter((p) =>
        p.tags.some((t) => activeTags.has(t))
      );
    }

    return result;
  }, [posts, search, activeTags]);

  const toggleTag = (tag: string) => {
    setActiveTags((prev) => {
      const next = new Set(prev);
      if (next.has(tag)) next.delete(tag);
      else next.add(tag);
      return next;
    });
  };

  const clearFilters = () => {
    setSearch("");
    setActiveTags(new Set());
    searchRef.current?.focus();
  };

  const hasFilters = search.trim() || activeTags.size > 0;

  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="max-w-4xl">
          <div className="mb-10 space-y-6">
            <div className="relative">
              <input
                ref={searchRef}
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search writing..."
                className="w-full border border-[var(--color-border)] bg-transparent px-4 py-3 pl-10 font-mono text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-tertiary)] focus:outline-none focus:border-[var(--color-text)] transition-colors"
              />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-tertiary)] font-mono text-sm">
                /
              </span>
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 font-mono text-xs text-[var(--color-text-tertiary)] hover:text-[var(--color-text)] transition-colors"
                >
                  clear
                </button>
              )}
            </div>

            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => setActiveTags(new Set())}
                  className={`font-mono text-xs px-3 py-1.5 border transition-colors ${
                    activeTags.size === 0 && !search
                      ? "border-[var(--color-text)] text-[var(--color-text)]"
                      : "border-[var(--color-border)] text-[var(--color-text-tertiary)] hover:text-[var(--color-text)]"
                  }`}
                >
                  All
                </button>
                {topTags.map(([tag, count]) => (
                  <button
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    className={`font-mono text-xs px-3 py-1.5 border transition-colors ${
                      activeTags.has(tag)
                        ? "border-[var(--color-text)] text-[var(--color-text)] bg-[var(--color-surface-elevated)]"
                        : "border-[var(--color-border)] text-[var(--color-text-tertiary)] hover:text-[var(--color-text)]"
                    }`}
                  >
                    {tag}
                    <span className="ml-1.5 text-[10px] opacity-60">
                      {count}
                    </span>
                  </button>
                ))}
                {sortedTags.length > 20 && (
                  <button
                    onClick={() => setShowAllTags(!showAllTags)}
                    className="font-mono text-xs px-3 py-1.5 border border-[var(--color-border)] text-[var(--color-text-tertiary)] hover:text-[var(--color-text)] transition-colors"
                  >
                    {showAllTags ? "Less" : `+${sortedTags.length - 20} tags`}
                  </button>
                )}
              </div>

              {showAllTags && (
                <div className="border border-[var(--color-border)] p-4 max-h-60 overflow-y-auto">
                  <div className="flex flex-wrap gap-2">
                    {sortedTags.slice(20).map(([tag, count]) => (
                      <button
                        key={tag}
                        onClick={() => toggleTag(tag)}
                        className={`font-mono text-xs px-2 py-1 border transition-colors ${
                          activeTags.has(tag)
                            ? "border-[var(--color-text)] text-[var(--color-text)] bg-[var(--color-surface-elevated)]"
                            : "border-[var(--color-border)] text-[var(--color-text-tertiary)] hover:text-[var(--color-text)]"
                        }`}
                      >
                        {tag}
                        <span className="ml-1 text-[10px] opacity-60">
                          {count}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {hasFilters && (
              <div className="flex items-center gap-3 text-sm text-[var(--color-text-secondary)]">
                <span>
                  {filteredPosts.length} of {posts.length} posts
                </span>
                <button
                  onClick={clearFilters}
                  className="font-mono text-xs underline underline-offset-4 text-[var(--color-text-tertiary)] hover:text-[var(--color-text)] transition-colors"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 gap-5">
            {filteredPosts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.03}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block border border-[var(--color-border)] p-6 md:p-8 hover:bg-[var(--color-surface-elevated)] transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-mono text-xs text-[var(--color-text-tertiary)]">
                          {post.date?.split("T")[0] || post.date}
                        </span>
                        <span className="font-mono text-xs text-[var(--color-text-tertiary)]">
                          {post.readingTime}
                        </span>
                      </div>
                      <h2 className="text-xl md:text-2xl font-medium font-[var(--font-heading)] group-hover:opacity-70 transition-opacity mb-3">
                        {post.title}
                      </h2>
                      <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed line-clamp-2 mb-4">
                        {post.excerpt}
                      </p>
                      {post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {post.tags.slice(0, 4).map((tag) => (
                            <span
                              key={tag}
                              className="font-mono text-[10px] text-[var(--color-text-tertiary)]"
                            >
                              #{tag}
                            </span>
                          ))}
                          {post.tags.length > 4 && (
                            <span className="font-mono text-[10px] text-[var(--color-text-tertiary)]">
                              +{post.tags.length - 4}
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="font-mono text-sm text-[var(--color-text-tertiary)] mb-4">
                No posts match your search.
              </p>
              <button
                onClick={clearFilters}
                className="font-mono text-xs tracking-wider uppercase border border-[var(--color-border)] px-4 py-2 hover:bg-[var(--color-surface-elevated)] transition-all"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}

export { BlogListClient };
