"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Github } from "lucide-react";
import { Wordmark } from "./wordmark";
import { GITHUB_URL } from "./site";

const links = [
  { href: "#pillars", label: "Platform" },
  { href: "#agenthive", label: "AgentHive" },
  { href: "#how", label: "How it works" },
  { href: "#architecture", label: "Architecture" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-[var(--color-border-soft)] bg-[var(--color-bg)]/80 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="#top" aria-label="Orqestra home" className="shrink-0">
          <Wordmark />
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-md px-3 py-1.5 text-[13px] text-[var(--color-muted)] transition-colors hover:text-[var(--color-fg)]"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-1.5 rounded-md px-3 py-1.5 text-[13px] text-[var(--color-muted)] transition-colors hover:text-[var(--color-fg)] sm:inline-flex"
          >
            <Github className="h-3.5 w-3.5" />
            GitHub
          </Link>
          <Link
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-md bg-[var(--color-fg)] px-3.5 py-1.5 text-[13px] font-medium text-[var(--color-bg)] transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
          >
            Get started
          </Link>
        </div>
      </nav>
    </header>
  );
}
