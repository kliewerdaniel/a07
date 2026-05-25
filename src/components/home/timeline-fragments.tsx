"use client";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";

const fragments = [
  {
    year: "2025",
    items: [
      "Building sovereign AI infrastructure for local-first intelligence",
      "Developing dynamic persona frameworks that learn and evolve",
      "Exploring the political economy of compute",
    ],
  },
  {
    year: "2024",
    items: [
      "Shipped RLHF Lab — an experimental platform for preference-based model alignment",
      "Built PersonaGen — a dynamic persona intelligence system",
      "Published research on synthetic intelligence frameworks",
    ],
  },
  {
    year: "2023",
    items: [
      "Architected multi-agent content generation systems",
      "Deep dive into local LLM orchestration with Ollama",
      "Began publishing technical research on AI infrastructure",
    ],
  },
  {
    year: "Earlier",
    items: [
      "Full-stack engineering across Django, React, and Node ecosystems",
      "Independent consulting on AI integration and automation",
      "Continuous exploration at the boundary of art and engineering",
    ],
  },
];

function TimelineFragments() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <Reveal>
          <span className="font-mono text-xs tracking-wider uppercase text-[var(--color-text-tertiary)]">
            Fragments
          </span>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {fragments.map((period, i) => (
            <Reveal key={period.year} delay={i * 0.1}>
              <div>
                <h3 className="font-mono text-sm text-[var(--color-text)] mb-4">
                  {period.year}
                </h3>
                <ul className="space-y-3">
                  {period.items.map((item, j) => (
                    <li key={j} className="flex gap-3">
                      <span className="block w-1.5 h-1.5 rounded-full bg-[var(--color-border-light)] mt-2 shrink-0" />
                      <span className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export { TimelineFragments };
