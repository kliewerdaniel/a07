"use client";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { currentFocus } from "@/config/site";

function CurrentFocus() {
  return (
    <section className="py-24 md:py-32 border-b border-[var(--color-border)]">
      <Container>
        <Reveal>
          <span className="font-mono text-xs tracking-wider uppercase text-[var(--color-text-tertiary)]">
            {currentFocus.title}
          </span>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentFocus.items.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.1}>
              <div className="group cursor-default">
                <div className="h-px w-8 bg-[var(--color-border-light)] mb-6 group-hover:w-16 transition-all duration-500" />
                <h3 className="text-lg font-medium mb-3 font-[var(--font-heading)]">
                  {item.label}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export { CurrentFocus };
