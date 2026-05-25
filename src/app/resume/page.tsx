import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { generateMetadata } from "@/lib/metadata";

export const metadata = generateMetadata({
  title: "Resume",
  description:
    "Engineering resume — AI systems, full-stack development, independent research, and technical leadership.",
  path: "/resume",
});

const experience = [
  {
    role: "Independent AI Researcher & Engineer",
    org: "Self-Employed",
    period: "2023 — Present",
    items: [
      "Building local-first AI infrastructure for sovereign intelligence systems",
      "Created PersonaGen — a dynamic persona intelligence framework with persistent memory and knowledge graphs",
      "Developed RLHF Lab — an experimental platform for preference-based model alignment",
      "Architected multi-agent content generation and distribution systems",
      "Publishing technical research on synthetic intelligence and local AI architectures",
    ],
  },
  {
    role: "Full-Stack Engineer",
    org: "Independent Consulting",
    period: "2021 — Present",
    items: [
      "Designed and built full-stack applications using Django, React, Next.js, and Node.js",
      "Integrated AI capabilities into existing applications and workflows",
      "Built automation systems for content generation, data processing, and workflow orchestration",
      "Provided technical guidance on AI strategy and implementation",
    ],
  },
  {
    role: "Software Engineer",
    org: "Various",
    period: "2019 — 2021",
    items: [
      "Built and maintained production web applications across multiple stacks",
      "Developed RESTful APIs and microservices architectures",
      "Implemented CI/CD pipelines and infrastructure automation",
    ],
  },
];

const skills = [
  { category: "Languages", items: "TypeScript, Python, JavaScript, SQL, Bash" },
  { category: "AI/ML", items: "Ollama, LangChain, LlamaIndex, PyTorch, Hugging Face, RAG, RLHF" },
  { category: "Frontend", items: "React, Next.js, TailwindCSS, Framer Motion, shadcn/ui" },
  { category: "Backend", items: "Django, FastAPI, Node.js, Express, PostgreSQL, Neo4j" },
  { category: "Infrastructure", items: "Docker, AWS, Vercel, CI/CD, Linux" },
  { category: "Tools", items: "Git, Neo4j, Weights & Biases, Jupyter, VS Code" },
];

export default function ResumePage() {
  return (
    <>
      <section className="py-24 md:py-32 border-b border-[var(--color-border)]">
        <Container>
          <div className="max-w-3xl">
            <Reveal>
              <span className="font-mono text-xs tracking-wider uppercase text-[var(--color-text-tertiary)]">
                Resume
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-6 text-4xl md:text-5xl font-medium font-[var(--font-heading)] tracking-[-0.02em] leading-[1.1]">
                Daniel Kliewer
              </h1>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-3 text-lg text-[var(--color-text-secondary)]">
                AI Engineer &bull; Full-Stack Developer &bull; Independent Researcher
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-6 flex flex-wrap gap-4">
                <a
                  href="/Daniel%20Kliewer%20-%20Resume%2005102026.pdf"
                  download
                  className="inline-flex items-center gap-2 font-mono text-xs tracking-wider uppercase border border-[var(--color-border)] px-5 py-3 hover:bg-[var(--color-surface-elevated)] transition-all"
                >
                  Download PDF ↓
                </a>
                <a
                  href="mailto:danielkliewer@gmail.com"
                  className="inline-flex items-center gap-2 font-mono text-xs tracking-wider uppercase border border-[var(--color-border)] px-5 py-3 hover:bg-[var(--color-surface-elevated)] transition-all"
                >
                  Email →
                </a>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-4xl">
            {/* Summary */}
            <Reveal>
              <div className="mb-16">
                <h2 className="font-mono text-xs tracking-wider uppercase text-[var(--color-text-tertiary)] mb-4">
                  Summary
                </h2>
                <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed max-w-2xl">
                  Independent AI researcher and full-stack engineer building
                  local-first intelligence infrastructure. Experienced in
                  architecting AI systems, developing full-stack applications,
                  and bridging the gap between research and production.
                  Passionate about sovereign AI, open source, and the craft of
                  software.
                </p>
              </div>
            </Reveal>

            {/* Experience */}
            <Reveal>
              <div className="mb-16">
                <h2 className="font-mono text-xs tracking-wider uppercase text-[var(--color-text-tertiary)] mb-8">
                  Experience
                </h2>
                <div className="space-y-10">
                  {experience.map((exp) => (
                    <div key={exp.role}>
                      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-3">
                        <div>
                          <h3 className="text-lg font-medium font-[var(--font-heading)]">
                            {exp.role}
                          </h3>
                          <p className="text-sm text-[var(--color-text-tertiary)] font-mono">
                            {exp.org}
                          </p>
                        </div>
                        <span className="text-xs font-mono text-[var(--color-text-tertiary)] mt-1 md:mt-0">
                          {exp.period}
                        </span>
                      </div>
                      <ul className="space-y-2">
                        {exp.items.map((item, i) => (
                          <li
                            key={i}
                            className="flex gap-3 text-sm text-[var(--color-text-secondary)] leading-relaxed"
                          >
                            <span className="block w-1 h-1 bg-[var(--color-border-light)] mt-2 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Skills */}
            <Reveal>
              <div className="mb-16">
                <h2 className="font-mono text-xs tracking-wider uppercase text-[var(--color-text-tertiary)] mb-8">
                  Skills
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {skills.map((skill) => (
                    <div key={skill.category}>
                      <h3 className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-tertiary)] mb-2">
                        {skill.category}
                      </h3>
                      <p className="text-sm text-[var(--color-text-secondary)]">
                        {skill.items}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Independent Research */}
            <Reveal>
              <div className="mb-16">
                <h2 className="font-mono text-xs tracking-wider uppercase text-[var(--color-text-tertiary)] mb-8">
                  Independent Research
                </h2>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium">
                      Synthetic Intelligence: A Framework for Local-First,
                      Dynamic Persona-Driven Knowledge Synthesis
                    </p>
                    <p className="text-xs font-mono text-[var(--color-text-tertiary)] mt-1">
                      2024 — Research paper on local-first persona intelligence
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">
                      Guide to Building a Sovereign Synthetic Intelligence System
                    </p>
                    <p className="text-xs font-mono text-[var(--color-text-tertiary)] mt-1">
                      2024 — Technical blueprint for sovereign AI infrastructure
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">
                      Information-Theoretic Analysis of Audible Binary Transmission
                      via Rhythmic Vocalization
                    </p>
                    <p className="text-xs font-mono text-[var(--color-text-tertiary)] mt-1">
                      2024 — Cross-disciplinary research on acoustic data transmission
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Education */}
            <Reveal>
              <div>
                <h2 className="font-mono text-xs tracking-wider uppercase text-[var(--color-text-tertiary)] mb-8">
                  Education
                </h2>
                <div>
                  <p className="text-sm font-medium">Self-Directed Study</p>
                  <p className="text-xs font-mono text-[var(--color-text-tertiary)] mt-1">
                    Continuous learning through building, research, and open
                    source contribution
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
