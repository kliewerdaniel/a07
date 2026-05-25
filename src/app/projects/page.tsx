import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { generateMetadata } from "@/lib/metadata";

export const metadata = generateMetadata({
  title: "Projects",
  description:
    "A showcase of systems, tools, and research — from local-first AI infrastructure to creative coding and experimental platforms.",
  path: "/projects",
});

const projects = [
  {
    id: "personagen",
    title: "PersonaGen",
    subtitle: "Dynamic Persona Intelligence Framework",
    timeline: "2024 — Present",
    description: `A local-first system for generating, managing, and evolving AI personas with persistent memory, adaptive behavior, and knowledge synthesis. PersonaGen enables the creation of synthetic personas that learn from interaction, maintain coherent identity across sessions, and integrate with local LLMs for private, sovereign intelligence.

The system uses a novel approach to persona management where each persona maintains its own knowledge graph, communication style, and behavioral patterns. Personas can be composed, forked, and merged — treating identity as a version-controlled system.`,
    tech: ["Python", "Ollama", "Neo4j", "LangChain", "FastAPI", "Docker"],
    lessons: [
      "Local knowledge graphs are essential for persistent persona memory",
      "Persona coherence requires careful management of context windows",
      "Composable identity systems enable novel interaction patterns",
    ],
    links: [{ label: "Research Paper", url: "#" }],
    featured: true,
  },
  {
    id: "rlhf-lab",
    title: "RLHF Lab",
    subtitle: "Reinforcement Learning from Human Feedback",
    timeline: "2024",
    description: `An experimental platform for training and fine-tuning language models using human preference data and reinforcement learning techniques. RLHF Lab provides a complete pipeline for collecting preferences, training reward models, and optimizing policies using PPO and other alignment algorithms.

The platform was designed to make RLHF accessible to independent researchers and small teams, reducing the barrier to entry for alignment research.`,
    tech: ["Python", "PyTorch", "TRL", "Weights & Biases", "Hugging Face"],
    lessons: [
      "RLHF pipelines require careful reward model calibration",
      "Preference collection quality directly impacts alignment quality",
      "Scalable infrastructure is critical for iterative training",
    ],
    links: [{ label: "GitHub", url: "#" }],
    featured: true,
  },
  {
    id: "sovereign-stack",
    title: "Sovereign Intelligence Stack",
    subtitle: "Blueprint for Independent AI",
    timeline: "2024 — Present",
    description: `A comprehensive framework for building sovereign AI systems — from local LLM orchestration to secure deployment pipelines. The Sovereign Stack provides reference architectures, tooling, and best practices for organizations and individuals who want to own their AI infrastructure end-to-end.

This project is both a technical specification and a philosophical argument for distributed, locally-controlled intelligence systems.`,
    tech: ["Next.js", "Python", "Docker", "Ollama", "RAG", "FastAPI"],
    lessons: [
      "Sovereign AI requires rethinking the entire infrastructure stack",
      "Local-first architectures change the privacy/performance tradeoff",
      "Open standards are critical for interoperable AI systems",
    ],
    links: [{ label: "Blueprint", url: "#" }],
    featured: true,
  },
  {
    id: "graphrag-assistant",
    title: "GraphRAG Research Assistant",
    subtitle: "Knowledge-Graph-Enhanced RAG System",
    timeline: "2024",
    description: `A research assistant that combines vector search with knowledge graph traversal for improved retrieval-augmented generation. The system uses Neo4j for graph storage, OpenAI embeddings for vector search, and a hybrid retrieval strategy that balances semantic similarity with relational context.`,
    tech: ["Python", "Neo4j", "LangChain", "OpenAI", "FastAPI"],
    lessons: [
      "Hybrid retrieval outperforms pure vector or pure graph search",
      "Graph traversal paths provide valuable context for generation",
      "Knowledge graph construction remains the key bottleneck",
    ],
    links: [],
    featured: false,
  },
  {
    id: "multi-agent-content",
    title: "Multi-Agent Content System",
    subtitle: "Cross-Platform Content Generation & Distribution",
    timeline: "2024",
    description: `An agent-based system for generating and distributing content across multiple platforms. Uses a swarm of specialized agents — researcher, writer, editor, publisher — that collaborate to produce platform-optimized content from a single source of truth.`,
    tech: ["Python", "AutoGen", "FastAPI", "React", "PostgreSQL"],
    lessons: [
      "Agent specialization dramatically improves output quality",
      "Content workflows benefit from explicit review stages",
      "Cross-platform publishing requires platform-specific adaptation",
    ],
    links: [],
    featured: false,
  },
];

export default function ProjectsPage() {
  return (
    <>
      <section className="py-24 md:py-32 border-b border-[var(--color-border)]">
        <Container>
          <div className="max-w-3xl">
            <Reveal>
              <span className="font-mono text-xs tracking-wider uppercase text-[var(--color-text-tertiary)]">
                Projects
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-6 text-4xl md:text-5xl font-medium font-[var(--font-heading)] tracking-[-0.02em] leading-[1.1] text-balance">
                Systems I have built.
              </h1>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-4 text-lg text-[var(--color-text-secondary)] max-w-xl">
                A collection of research platforms, AI infrastructure, and
                experimental tools. Each project represents a thread of inquiry
                into how intelligent systems are built.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="space-y-24">
            {projects.map((project, i) => (
              <Reveal key={project.id} delay={i * 0.08}>
                <section
                  id={project.id}
                  className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12"
                >
                  <div className="md:col-span-2">
                    <div className="sticky top-24">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-text-tertiary)]">
                        {project.timeline}
                      </span>
                      <h2 className="mt-3 text-2xl md:text-3xl font-medium font-[var(--font-heading)] tracking-[-0.02em]">
                        {project.title}
                      </h2>
                      <p className="mt-2 text-sm font-mono text-[var(--color-text-tertiary)] uppercase tracking-wider">
                        {project.subtitle}
                      </p>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="font-mono text-[10px] px-2 py-1 border border-[var(--color-border)] text-[var(--color-text-tertiary)]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-3">
                    <div className="space-y-6">
                      {project.description.split("\n\n").map((paragraph, pi) => (
                        <p
                          key={pi}
                          className="text-base text-[var(--color-text-secondary)] leading-relaxed"
                        >
                          {paragraph.trim()}
                        </p>
                      ))}

                      {project.lessons.length > 0 && (
                        <div className="mt-8">
                          <h3 className="font-mono text-xs uppercase tracking-wider text-[var(--color-text)] mb-4">
                            Lessons Learned
                          </h3>
                          <ul className="space-y-2">
                            {project.lessons.map((lesson, li) => (
                              <li
                                key={li}
                                className="flex gap-3 text-sm text-[var(--color-text-secondary)]"
                              >
                                <span className="block w-1 h-1 bg-[var(--color-border-light)] mt-2 shrink-0" />
                                {lesson}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </section>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
