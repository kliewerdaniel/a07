import Link from "next/link";
import { Container } from "@/components/ui/container";
import { siteConfig, navItems } from "@/config/site";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)] py-12 md:py-16">
      <Container>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <Link
              href="/"
              className="font-mono text-sm tracking-wider uppercase"
            >
              Daniel Kliewer
            </Link>
            <p className="mt-3 text-sm text-[var(--color-text-secondary)] max-w-xs">
              Builder, researcher, engineer. Exploring the intersection of
              software, art, and synthetic cognition.
            </p>
          </div>

          <div>
            <h3 className="font-mono text-xs tracking-wider uppercase text-[var(--color-text-tertiary)] mb-4">
              Navigation
            </h3>
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="font-mono text-xs tracking-wider uppercase text-[var(--color-text-tertiary)] mb-4">
              Connect
            </h3>
            <div className="flex flex-col gap-2">
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors"
              >
                GitHub
              </a>
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors"
              >
                LinkedIn
              </a>
              <a
                href={`mailto:${siteConfig.links.email}`}
                className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors"
              >
                Email
              </a>
              <a
                href="/rss.xml"
                className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors"
              >
                RSS Feed
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-[var(--color-border)] pt-6 flex flex-col md:flex-row justify-between gap-2">
          <p className="text-xs text-[var(--color-text-tertiary)] font-mono">
            &copy; {year} Daniel Kliewer. All rights reserved.
          </p>
          <p className="text-xs text-[var(--color-text-tertiary)] font-mono">
            Built with Next.js &middot; TypeScript &middot; Craft
          </p>
        </div>
      </Container>
    </footer>
  );
}

export { Footer };
