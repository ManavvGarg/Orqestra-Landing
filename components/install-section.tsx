import { InstallCommand } from "./install-command";
import { Check } from "lucide-react";

const steps = [
  {
    n: "01",
    title: "Run the one-liner",
    body: "Detects your OS + arch, downloads the matching binary, runs the interactive installer.",
  },
  {
    n: "02",
    title: "Pick local or server mode",
    body: "Local skips domain + TLS prompts. Server walks you through Cloudflare DNS or prints manual records.",
  },
  {
    n: "03",
    title: "Approve once, install everything",
    body: "Installer can install Docker, NVIDIA toolkit, configure firewall — with sudo, or by printing commands you copy.",
  },
  {
    n: "04",
    title: "Open the dashboard",
    body: "Register the first user (becomes admin). Start spinning up notebooks and models.",
  },
];

export function InstallSection() {
  return (
    <section className="relative mx-auto max-w-5xl px-6 py-24">
      <div className="mb-10 max-w-2xl">
        <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[var(--color-accent)]">
          Install
        </p>
        <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          A real product behind a one-line install.
        </h2>
        <p className="mt-4 text-[var(--color-muted)]">
          Pre-flight disk + RAM checks. Resume on re-run. Falls back to manual prompts when it
          can't proceed automatically. No half-built deployments.
        </p>
      </div>

      <div className="mb-12">
        <InstallCommand size="lg" />
        <p className="mt-3 text-xs text-[var(--color-muted)]">
          Linux + macOS. Less than ~100MB single binary. No prerequisites beyond Docker (which the installer
          can fetch for you).
        </p>
      </div>

      <ol className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-border)] sm:grid-cols-2">
        {steps.map((s) => (
          <li
            key={s.n}
            className="flex gap-4 bg-[var(--color-bg)] p-6 hover:bg-[var(--color-bg-soft)]"
          >
            <div className="mt-0.5 font-mono text-xs text-[var(--color-muted)]">{s.n}</div>
            <div>
              <div className="flex items-center gap-2 text-sm font-semibold">
                <Check className="h-4 w-4 text-[var(--color-accent)]" />
                {s.title}
              </div>
              <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-muted)]">{s.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
