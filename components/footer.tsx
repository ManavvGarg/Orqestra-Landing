import Link from "next/link";
import { Github } from "lucide-react";
import { Wordmark } from "./wordmark";
import { GITHUB_URL, DOCS_URL } from "./site";

const links = [
  { href: "#pillars", label: "Platform" },
  { href: "#agenthive", label: "AgentHive" },
  { href: "#how", label: "How it works" },
  { href: "#architecture", label: "Architecture" },
  { href: DOCS_URL, label: "Docs", external: true },
  { href: `${GITHUB_URL}/issues`, label: "Issues", external: true },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)]">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-xs">
            <Wordmark />
            <p className="mt-3 text-[13px] leading-relaxed text-[var(--color-muted)]">
              Orqestra — your hardware, orchestrated.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-2.5">
            {links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                target={l.external ? "_blank" : undefined}
                rel={l.external ? "noreferrer" : undefined}
                className="link-underline text-[13px] text-[var(--color-muted)] transition-colors hover:text-[var(--color-fg)]"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-[var(--color-border-soft)] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[11px] text-[var(--color-faint)]">
            Open-source · MIT licensed · Self-hosted
          </p>
          <Link
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center gap-1.5 text-[12px] text-[var(--color-muted)] transition-colors hover:text-[var(--color-fg)]"
          >
            <Github className="h-3.5 w-3.5" />
            github.com/manavvgarg/Orqestra
          </Link>
        </div>
      </div>
    </footer>
  );
}
