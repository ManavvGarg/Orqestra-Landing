import Link from "next/link";
import { Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] py-12">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2 text-sm font-semibold">
            <span className="inline-block h-3 w-3 rounded-sm bg-gradient-to-br from-indigo-500 to-cyan-400" />
            Orqestra
          </div>
          <p className="mt-1 text-xs text-[var(--color-muted)]">
            Self-host Jupyter + LLMs. Open source, MIT-licensed.
          </p>
        </div>

        <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[var(--color-muted)]">
          <Link
            href="https://github.com/manavvgarg/Orqestra"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-[var(--color-fg)]"
          >
            <Github className="h-4 w-4" />
            GitHub
          </Link>
          <Link
            href="https://github.com/manavvgarg/Orqestra/blob/main/docs/INSTALL.md"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[var(--color-fg)]"
          >
            Install guide
          </Link>
          <Link
            href="https://github.com/manavvgarg/Orqestra/blob/main/docs/DEVELOPMENT.md"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[var(--color-fg)]"
          >
            Dev guide
          </Link>
          <Link
            href="https://github.com/manavvgarg/Orqestra/issues"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[var(--color-fg)]"
          >
            Issues
          </Link>
        </nav>
      </div>
    </footer>
  );
}
