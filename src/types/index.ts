export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  formattedDate: string;
  excerpt: string;
  content: string;
  tags: string[];
  readingTime: string;
  coverImage?: string;
  published: boolean;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  lessons: string[];
  links: { label: string; url: string }[];
  timeline: string;
  image?: string;
  featured: boolean;
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
    linkedin: string;
    email: string;
  };
}

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}
