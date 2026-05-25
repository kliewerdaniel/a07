import type { SiteConfig, NavItem } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Daniel Kliewer",
  title: "Daniel Kliewer — Builder, Researcher, Engineer",
  description:
    "Independent AI researcher, full-stack engineer, and creative technologist building local-first intelligence systems and exploring the intersection of software, art, and synthetic cognition.",
  url: "https://danielkliewer.com",
  ogImage: "/og.jpg",
  links: {
    twitter: "https://x.com/kliewer_daniel",
    github: "https://github.com/kliewerdaniel",
    linkedin: "https://www.linkedin.com/in/daniel-kliewer-42691944/",
    email: "danielkliewer@gmail.com",
  },
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Writing", href: "/blog" },
  { label: "Projects", href: "/projects" },
  { label: "Resume", href: "/resume" },
];

export const manifesto = `I build systems that think. I write about what I learn. I believe the best software emerges from the intersection of deep technical craft and artistic intuition.`;

export const currentFocus = {
  title: "Currently Building",
  items: [
    {
      label: "Local-First AI Infrastructure",
      description:
        "Building tooling that makes powerful AI systems run entirely on consumer hardware without compromising capability or privacy.",
    },
    {
      label: "Dynamic Persona Intelligence",
      description:
        "Developing frameworks for adaptive, context-aware synthetic personas that learn and evolve through interaction.",
    },
    {
      label: "Sovereign Intelligence Stack",
      description:
        "Architecting the full stack for independent AI systems — from local models to knowledge graphs to agentic workflows.",
    },
  ],
};

export const featuredProjects = [
  {
    title: "PersonaGen",
    subtitle: "Dynamic Persona Intelligence Framework",
    description:
      "A local-first system for generating, managing, and evolving AI personas with persistent memory, adaptive behavior, and knowledge synthesis.",
    tech: ["Python", "Ollama", "Neo4j", "LangChain", "FastAPI"],
    slug: "personagen",
  },
  {
    title: "Sovereign Intelligence Stack",
    subtitle: "Blueprint for Independent AI",
    description:
      "A comprehensive framework for building sovereign AI systems — from local LLM orchestration to secure deployment pipelines.",
    tech: ["Next.js", "Python", "Docker", "Ollama", "RAG"],
    slug: "sovereign-stack",
  },
  {
    title: "RLHF Lab",
    subtitle: "Reinforcement Learning from Human Feedback",
    description:
      "An experimental platform for training and fine-tuning language models using human preference data and reinforcement learning techniques.",
    tech: ["Python", "PyTorch", "TRL", "Weights & Biases"],
    slug: "rlhf-lab",
  },
];
