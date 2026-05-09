import Link from "next/link";
import { ArrowUpRight, Github, Star } from "lucide-react";
import { InstallCommand } from "./install-command";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 grid-bg" />
      <div className="absolute inset-0 -z-10 gradient-mesh" />

      <div className="mx-auto max-w-5xl px-6 pb-24 pt-28 sm:pt-36">
        <div className="fade-up fade-up-delay-1 mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white/[0.03] px-3 py-1 text-xs text-[var(--color-muted)] backdrop-blur">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-success)] opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--color-success)]" />
          </span>
          <span>v1.0.0 — open source</span>
          <Link
            href="https://github.com/manavvgarg/Orqestra"
            className="ml-1 inline-flex items-center gap-1 text-[var(--color-fg)] hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            star on GitHub <ArrowUpRight className="h-3 w-3" />
          </Link>
        </div>

        <h1 className="fade-up fade-up-delay-2 text-balance text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
          Self-host{" "}
          <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
            Jupyter + LLMs
          </span>
          <br />
          from one dashboard.
        </h1>

        <p className="fade-up fade-up-delay-3 mt-6 max-w-2xl text-balance text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
          Orqestra spins up isolated notebook containers and OpenAI-compatible LLM endpoints on
          your own server. Live logs, GPU stats, file browser, multi-tenant auth — all
          installable with a single command.
        </p>

        <div className="fade-up fade-up-delay-4 mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <InstallCommand size="lg" />
        </div>

        <div className="fade-up fade-up-delay-4 mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-[var(--color-muted)]">
          <span>Linux + macOS</span>
          <span className="h-1 w-1 rounded-full bg-[var(--color-border)]" />
          <span>x64 + arm64</span>
          <span className="h-1 w-1 rounded-full bg-[var(--color-border)]" />
          <span>~30 MB single binary</span>
          <span className="h-1 w-1 rounded-full bg-[var(--color-border)]" />
          <span>Pre-flight checks before any change</span>
        </div>

        <div className="fade-up fade-up-delay-4 mt-10 flex flex-wrap gap-3">
          <Link
            href="https://github.com/manavvgarg/Orqestra"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-border)] bg-white/[0.03] px-4 py-2 text-sm font-medium hover:bg-white/[0.07]"
          >
            <Github className="h-4 w-4" />
            View source
          </Link>
          <Link
            href="https://github.com/manavvgarg/Orqestra/blob/main/docs/INSTALL.md"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-fg)] px-4 py-2 text-sm font-medium text-[var(--color-bg)] hover:bg-white/90"
          >
            Install guide
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
