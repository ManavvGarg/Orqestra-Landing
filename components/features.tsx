import {
  Activity,
  Boxes,
  Cpu,
  FileCode2,
  FolderTree,
  Lock,
  ServerCog,
  Tags,
  Terminal,
} from "lucide-react";

const features = [
  {
    icon: FileCode2,
    title: "Jupyter on demand",
    description:
      "Spin up Base / TensorFlow / PyTorch / R notebooks in isolated containers, each with its own persistent volume + token-protected URL.",
  },
  {
    icon: Boxes,
    title: "Host any LLM",
    description:
      "Search the live catalog of Ollama and Docker Model Runner models. Pick one, get an OpenAI-compatible API at /v1/chat/completions in seconds.",
  },
  {
    icon: Activity,
    title: "Live logs + stats",
    description:
      "Container stdout, GPU utilization, RAM and CPU usage stream to the dashboard via WebSockets. No SSH, no docker logs, no grep.",
  },
  {
    icon: FolderTree,
    title: "In-browser file explorer",
    description:
      "Navigate the persistent volume of any Jupyter container, download files or whole directories as tar archives — without touching the terminal.",
  },
  {
    icon: Cpu,
    title: "Resource-aware scheduling",
    description:
      "Pick CPU cores, RAM cap, GPU device, and VRAM budget per project. Server reports free resources before you commit.",
  },
  {
    icon: Lock,
    title: "Auto TLS",
    description:
      "Traefik + Let's Encrypt with Cloudflare DNS-01. Wildcard cert covers every subdomain. Renews itself.",
  },
  {
    icon: Tags,
    title: "Tags + bulk ops",
    description:
      "Color-coded tags, multi-select, type-to-confirm bulk delete. Destroyed projects get their own bucket, not deleted forever.",
  },
  {
    icon: ServerCog,
    title: "AI-assisted recovery",
    description:
      "Optional: paste an Anthropic key. If a step fails during install, Claude reads the error, proposes a fix, you approve before commands run.",
  },
  {
    icon: Terminal,
    title: "One command, one binary",
    description:
      "self-contained installer. No npm, no Python, no apt-get pre-reqs. Detects your OS, can install Docker + NVIDIA toolkit if you let it.",
  },
];

export function Features() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-24">
      <div className="mb-12 max-w-2xl">
        <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[var(--color-accent)]">
          What's inside
        </p>
        <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          Built for one developer, scales to a team.
        </h2>
        <p className="mt-4 text-[var(--color-muted)]">
          Every primitive you need to run notebooks and models on your own hardware. No SaaS
          dependency, no vendor lock-in.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-border)] sm:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="group relative bg-[var(--color-bg)] p-6 transition-colors hover:bg-[var(--color-bg-soft)]"
          >
            <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-md border border-[var(--color-border)] bg-white/[0.03] text-[var(--color-accent)] transition-colors group-hover:border-[var(--color-accent)]/40">
              <Icon className="h-4 w-4" />
            </div>
            <h3 className="mb-2 text-sm font-semibold">{title}</h3>
            <p className="text-sm leading-relaxed text-[var(--color-muted)]">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
