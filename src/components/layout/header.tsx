"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { navItems } from "@/config/site";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { ThemeToggle } from "@/components/ui/theme-toggle";

function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed left-0 right-0 top-0 z-40 border-b border-[var(--color-border)] bg-[var(--color-surface)]/80 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="font-mono text-sm tracking-wider uppercase hover:opacity-70 transition-opacity"
          >
            Daniel Kliewer
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "font-mono text-xs tracking-wider uppercase transition-opacity hover:opacity-70",
                  pathname === item.href
                    ? "text-[var(--color-text)]"
                    : "text-[var(--color-text-tertiary)]"
                )}
              >
                {item.label}
              </Link>
            ))}
            <ThemeToggle />
          </nav>

          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <MobileNav />
          </div>
        </div>
      </Container>
    </header>
  );
}

function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    if (open) {
      document.addEventListener("mousedown", handler);
    }
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="font-mono text-xs tracking-wider uppercase cursor-pointer"
      >
        Menu
      </button>
      {open && (
        <nav className="absolute right-0 top-full mt-2 w-48 border border-[var(--color-border)] bg-[var(--color-surface)] p-4 shadow-lg">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "font-mono text-xs tracking-wider uppercase transition-opacity hover:opacity-70",
                  pathname === item.href
                    ? "text-[var(--color-text)]"
                    : "text-[var(--color-text-tertiary)]"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </div>
  );
}

export { Header };
