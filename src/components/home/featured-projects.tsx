"use client";

import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { featuredProjects } from "@/config/site";

function FeaturedProjects() {
  return (
    <section className="py-24 md:py-32 border-b border-[var(--color-border)]">
      <Container>
        <Reveal>
          <div className="flex items-center justify-between mb-12">
            <span className="font-mono text-xs tracking-wider uppercase text-[var(--color-text-tertiary)]">
              Selected Work
            </span>
            <Link
              href="/projects"
              className="font-mono text-xs tracking-wider uppercase text-[var(--color-text-tertiary)] hover:text-[var(--color-text)] transition-colors"
            >
              View all →
            </Link>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProjects.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.1}>
              <Link
                href={`/projects#${project.slug}`}
                className="group block border border-[var(--color-border)] p-6 hover:bg-[var(--color-surface-elevated)] transition-all duration-300"
              >
                <div className="h-px w-8 bg-[var(--color-border-light)] mb-6 group-hover:w-full transition-all duration-500" />
                <h3 className="text-xl font-medium mb-2 font-[var(--font-heading)]">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-[var(--color-text-tertiary)] mb-4 uppercase tracking-wider">
                  {project.subtitle}
                </p>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] px-2 py-1 border border-[var(--color-border)] text-[var(--color-text-tertiary)]"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="font-mono text-[10px] px-2 py-1 border border-[var(--color-border)] text-[var(--color-text-tertiary)]">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export { FeaturedProjects };
