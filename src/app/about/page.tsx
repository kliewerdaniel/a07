import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { generateMetadata } from "@/lib/metadata";

export const metadata = generateMetadata({
  title: "About",
  description:
    "Engineer, researcher, and builder exploring the frontiers of local-first AI, synthetic intelligence, and the craft of software.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <section className="py-24 md:py-32 border-b border-[var(--color-border)]">
        <Container>
          <div className="max-w-3xl">
            <Reveal>
              <span className="font-mono text-xs tracking-wider uppercase text-[var(--color-text-tertiary)]">
                About
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-medium font-[var(--font-heading)] tracking-[-0.02em] leading-[1.1] text-balance">
                Building at the boundary of code and cognition.
              </h1>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-3xl">
            <div className="space-y-6 text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
              <Reveal>
                <p>
                  I build systems that think. Not as a metaphor, but as an
                  engineering practice. My work lives at the intersection of
                  software architecture, artificial intelligence, and artistic
                  craft — a place where the technical and the philosophical
                  continuously inform each other.
                </p>
              </Reveal>

              <Reveal delay={0.05}>
                <p>
                  My approach to engineering is grounded in a belief that the
                  best software emerges not from rigid methodologies or
                  corporate best practices, but from deep curiosity, obsessive
                  attention to craft, and a willingness to build things that
                  might not work. I am drawn to the frontier — not because it is
                  fashionable, but because that is where the questions get
                  interesting.
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <p>
                  The central thread of my current work is local-first AI
                  infrastructure. I believe that the future of intelligence
                  systems is not exclusively in the cloud, but distributed,
                  personal, and sovereign. I build tooling that makes powerful
                  AI systems run entirely on consumer hardware — because
                  intelligence should be owned, not rented.
                </p>
              </Reveal>

              <Reveal delay={0.15}>
                <p>
                  I am the creator of PersonaGen, a dynamic persona
                  intelligence framework; RLHF Lab, an experimental platform for
                  preference-based model alignment; and various other systems
                  that explore the boundaries of what local AI can do. My work
                  spans the full stack — from infrastructure to interface — and
                  I write extensively about what I learn along the way.
                </p>
              </Reveal>

              <Reveal delay={0.2}>
                <p>
                  Before going deep on AI, I built full-stack applications
                  across Django, React, and Node ecosystems. I have done
                  independent consulting, built automation systems, and spent
                  years learning what it means to ship software that matters.
                  Every project teaches me something about the relationship
                  between the systems we build and the people who use them.
                </p>
              </Reveal>

              <Reveal delay={0.25}>
                <p>
                  I write because writing is thinking. This site is both a
                  portfolio and a research journal — a place to work through
                  ideas publicly, document what I build, and contribute to the
                  ongoing conversation about what it means to create intelligent
                  systems in an era of profound technological change.
                </p>
              </Reveal>

              <Reveal delay={0.3}>
                <p>
                  If you are building something interesting at the intersection
                  of AI, local systems, and creative software, I would like to
                  hear about it.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.35}>
              <div className="mt-12 pt-8 border-t border-[var(--color-border)]">
                <a
                  href="mailto:danielkliewer@gmail.com"
                  className="inline-flex items-center gap-2 font-mono text-xs tracking-wider uppercase border border-[var(--color-border)] px-5 py-3 hover:bg-[var(--color-surface-elevated)] transition-all"
                >
                  Get in touch →
                </a>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
