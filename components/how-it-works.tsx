import { SectionHeader } from "./section-header";
import { Reveal } from "./reveal";
import { Terminal, LayoutDashboard, Workflow } from "lucide-react";

const steps = [
  {
    n: "01",
    icon: Terminal,
    title: "Install.",
    body: "One script provisions Docker, the network, every service.",
  },
  {
    n: "02",
    icon: LayoutDashboard,
    title: "Open the dashboard.",
    body: "Notebooks, models, sandboxes, swarms — one control plane.",
  },
  {
    n: "03",
    icon: Workflow,
    title: "Orchestrate.",
    body: "Build it, run it, watch it stream.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <SectionHeader eyebrow="Getting started" title="Running in three steps." />

      <div className="relative mt-14 grid gap-px overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-border)] sm:grid-cols-3">
        {steps.map((s, i) => (
          <Reveal key={s.n} delay={i * 100}>
            <div className="group relative flex h-full flex-col gap-4 bg-[var(--color-bg-card)] p-7 transition-colors duration-300 hover:bg-[#111114] sm:p-8">
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--color-border)] bg-[#0b0b0d] text-[var(--color-accent)] transition-colors duration-300 group-hover:border-[var(--color-accent)]/50">
                  <s.icon className="h-[18px] w-[18px]" />
                </div>
                <span className="font-mono text-[28px] font-semibold leading-none text-[#1f1f23] transition-colors duration-300 group-hover:text-[#2a2a30]">
                  {s.n}
                </span>
              </div>
              <h3 className="text-lg font-semibold tracking-tight">
                <span className="font-mono text-[13px] text-[var(--color-accent)]">
                  Step {s.n.replace(/^0/, "")}
                </span>{" "}
                — {s.title}
              </h3>
              <p className="text-[14px] leading-relaxed text-[var(--color-muted)]">
                {s.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
