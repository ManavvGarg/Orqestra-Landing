import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { AgentGraph } from "./agent-graph";
import { InstallCommand } from "./install-command";
import { GITHUB_URL } from "./site";

const stream = [
  { from: "CEO", to: "Researcher", color: "#22d3ee", text: "delegate: gather sources on X" },
  { from: "Researcher", to: "Writer", color: "#f59e0b", text: "handoff: 6 findings attached" },
  { from: "Writer", to: "QA", color: "#34d399", text: "send_message: draft v2 ready" },
  { from: "QA", to: "CEO", color: "#6366f1", text: "return: score 0.94 — ship it" },
];

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-16">
      {/* textures */}
      <div className="absolute inset-0 -z-10 line-grid mask-fade-radial" />
      <div className="absolute left-1/2 top-0 -z-10 h-[520px] w-[820px] -translate-x-1/2 glow-accent" />
      <div className="noise -z-10" />

      <div className="mx-auto grid max-w-6xl gap-14 px-6 pb-24 pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pb-32 lg:pt-24">
        {/* ---- copy ---- */}
        <div className="flex flex-col">
          <div className="hero-in d1 mb-7 inline-flex w-fit items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-soft)] px-3 py-1 text-[12px] text-[var(--color-muted)]">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-green)] opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--color-green)]" />
            </span>
            Open-source
            <span className="text-[var(--color-border)]">·</span>
            Self-hosted
          </div>

          <h1 className="hero-in d2 text-balance text-5xl font-semibold leading-[1.04] tracking-[-0.02em] sm:text-6xl lg:text-[64px]">
            Your machine.
            <br />
            Your models.
            <br />
            <span className="text-gradient">Your swarm.</span>
          </h1>

          <p className="hero-in d3 mt-6 max-w-xl text-pretty text-[15px] leading-relaxed text-[var(--color-muted)] sm:text-base">
            Orqestra turns the computer you already own into a full AI platform —
            notebooks, model hosting, sandboxes, and multi-agent swarms.
            No rented GPUs. No vendor lock-in.
          </p>

          <div className="hero-in d4 mt-8 flex flex-wrap items-center gap-3">
            <Link
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-lg bg-[var(--color-fg)] px-5 py-2.5 text-sm font-medium text-[var(--color-bg)] transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
            >
              Get started
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
            <Link
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-soft)] px-5 py-2.5 text-sm font-medium text-[var(--color-fg)] transition-colors hover:border-[var(--color-accent)]/50 hover:bg-[#141417]"
            >
              <Star className="h-4 w-4" />
              Star on GitHub
            </Link>
          </div>

          <div className="hero-in d5 mt-6">
            <InstallCommand variant="inline" />
          </div>
        </div>

        {/* ---- live graph ---- */}
        <div className="hero-in d4 relative">
          <div className="float-slow rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-1.5 card-shadow">
            <div className="rounded-xl border border-[var(--color-border-soft)] bg-[#0b0b0d]">
              {/* header */}
              <div className="flex items-center justify-between border-b border-[var(--color-border-soft)] px-4 py-2.5">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                  <span className="font-mono text-[11px] text-[var(--color-muted)]">
                    agenthive / content-swarm
                  </span>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] px-2 py-0.5 font-mono text-[10px] text-[var(--color-green)]">
                  <span className="h-1 w-1 rounded-full bg-[var(--color-green)]" />
                  live
                </span>
              </div>

              {/* graph */}
              <div className="px-3 pt-3">
                <div className="h-[260px] w-full">
                  <AgentGraph />
                </div>
              </div>

              {/* stream */}
              <div className="space-y-1.5 border-t border-[var(--color-border-soft)] px-4 py-3 font-mono text-[10.5px] leading-relaxed">
                {stream.map((s, i) => (
                  <div key={i} className="flex items-center gap-1.5">
                    <span style={{ color: s.color }}>{s.from}</span>
                    <ArrowRight className="h-2.5 w-2.5 shrink-0 text-[var(--color-faint)]" />
                    <span className="text-[var(--color-muted)]">{s.to}</span>
                    <span className="truncate text-[var(--color-faint)]">— {s.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 pb-2">
        <p className="font-mono text-[11px] text-[var(--color-faint)]">
          Next.js · tRPC · Go orchestrators · PostgreSQL · Redis · Python agent harness
        </p>
      </div>
    </section>
  );
}
