import Link from "next/link";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center">
      <Container>
        <div className="max-w-xl">
          <span className="font-mono text-xs tracking-wider uppercase text-[var(--color-text-tertiary)]">
            Error 404
          </span>
          <h1 className="mt-6 text-4xl md:text-5xl font-medium font-[var(--font-heading)] tracking-[-0.02em] leading-[1.1]">
            This page does not exist.
          </h1>
          <p className="mt-4 text-lg text-[var(--color-text-secondary)]">
            The link you followed may be broken, or the page may have been
            removed.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex items-center gap-2 font-mono text-xs tracking-wider uppercase border border-[var(--color-border)] px-5 py-3 hover:bg-[var(--color-surface-elevated)] transition-all"
          >
            Back home →
          </Link>
        </div>
      </Container>
    </div>
  );
}
