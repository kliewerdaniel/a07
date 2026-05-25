import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import { Stagger } from "@/components/motion/stagger";
import { HeroSection } from "@/components/home/hero-section";
import { CurrentFocus } from "@/components/home/current-focus";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { WritingPreview } from "@/components/home/writing-preview";
import { PhilosophySection } from "@/components/home/philosophy-section";
import { TimelineFragments } from "@/components/home/timeline-fragments";
import { getAllPosts } from "@/lib/blog";
import { generateMetadata } from "@/lib/metadata";

export const metadata = generateMetadata();

export default function HomePage() {
  const posts = getAllPosts().slice(0, 4);

  return (
    <>
      <HeroSection />
      <CurrentFocus />
      <FeaturedProjects />
      <WritingPreview posts={posts} />
      <PhilosophySection />
      <TimelineFragments />
    </>
  );
}
