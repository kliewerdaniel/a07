"use client";

import { Container } from "@/components/ui/container";
import { TextReveal } from "@/components/motion/text-reveal";

function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center border-b border-[var(--color-border)]">
      <Container>
        <div className="max-w-4xl">
          <div className="mb-6">
            <span className="font-mono text-xs tracking-wider uppercase text-[var(--color-text-tertiary)]">
              Daniel Kliewer
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-[var(--font-heading)] font-medium leading-[0.95] tracking-[-0.03em] mb-8 text-balance">
            <TextReveal text="Building systems that think." />
          </h1>

          <p className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-2xl leading-relaxed font-[var(--font-body)]">
            Independent AI researcher, full-stack engineer, and creative
            technologist exploring the intersection of software, art, and
            synthetic cognition.
          </p>

          <div className="mt-12 flex flex-wrap gap-6">
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 font-mono text-xs tracking-wider uppercase border border-[var(--color-border)] px-5 py-3 hover:bg-[var(--color-surface-elevated)] transition-all"
            >
              About
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 font-mono text-xs tracking-wider uppercase border border-[var(--color-border)] px-5 py-3 hover:bg-[var(--color-surface-elevated)] transition-all"
            >
              Writing
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 font-mono text-xs tracking-wider uppercase border border-[var(--color-border)] px-5 py-3 hover:bg-[var(--color-surface-elevated)] transition-all"
            >
              Projects
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
          </div>
        </div>
      </Container>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="animate-bounce font-mono text-[10px] tracking-widest uppercase text-[var(--color-text-tertiary)]">
          Scroll
        </div>
      </div>
    </section>
  );
}

function Link({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}

export { HeroSection };
