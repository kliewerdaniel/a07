"use client";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";

const beliefs = [
  "The best software emerges from the intersection of deep technical craft and artistic intuition.",
  "Local-first AI isn't just about privacy — it's about sovereignty. Owning your intelligence infrastructure is the foundation of digital autonomy.",
  "Writing is thinking. Every essay, every notebook, every README is a mechanism for understanding.",
  "Open source is not a business model. It's a philosophical stance on how knowledge should flow through society.",
  "The most important systems are the ones you build for yourself, not the ones you're told to build.",
  "Elegance in engineering is not about complexity. It's about reducing systems to their essential nature.",
  "AI should augment human capability, not replace human judgment.",
];

function PhilosophySection() {
  return (
    <section className="py-24 md:py-32 border-b border-[var(--color-border)]">
      <Container>
        <Reveal>
          <span className="font-mono text-xs tracking-wider uppercase text-[var(--color-text-tertiary)]">
            Things I Believe
          </span>
        </Reveal>

        <div className="mt-12 max-w-3xl">
          {beliefs.map((belief, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div className="group flex gap-4 py-4 border-t border-[var(--color-border)] first:border-t-0">
                <span className="font-mono text-[10px] text-[var(--color-text-tertiary)] pt-1 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-base md:text-lg leading-relaxed text-[var(--color-text-secondary)] group-hover:text-[var(--color-text)] transition-colors">
                  {belief}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export { PhilosophySection };
