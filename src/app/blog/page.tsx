import Link from "next/link";
import { Container } from "@/components/ui/container";
import { getAllPosts, getAllTags } from "@/lib/blog";
import { generateMetadata } from "@/lib/metadata";
import { BlogListClient } from "@/components/blog/blog-list-client";

export const metadata = generateMetadata({
  title: "Writing",
  description:
    "Essays, technical deep dives, and philosophical explorations on AI, software engineering, and the craft of building intelligent systems.",
  path: "/blog",
});

export default function BlogPage() {
  const posts = getAllPosts();
  const tags = getAllTags();

  return (
    <>
      <section className="py-24 md:py-32 border-b border-[var(--color-border)]">
        <Container>
          <div className="max-w-3xl">
            <span className="font-mono text-xs tracking-wider uppercase text-[var(--color-text-tertiary)]">
              Writing
            </span>
            <h1 className="mt-6 text-4xl md:text-5xl font-medium font-[var(--font-heading)] tracking-[-0.02em] leading-[1.1]">
              Field Notes &amp; Research
            </h1>
            <p className="mt-4 text-lg text-[var(--color-text-secondary)] max-w-xl">
              Essays on AI infrastructure, local intelligence systems, and the
              philosophy of software. Technical deep dives, architectural
              explorations, and independent research.
            </p>
          </div>
        </Container>
      </section>

      <BlogListClient posts={posts} tags={tags} />
    </>
  );
}
