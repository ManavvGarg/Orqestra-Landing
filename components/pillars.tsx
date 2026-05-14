import { SectionHeader } from "./section-header";
import { Reveal } from "./reveal";

/* ------------------------------------------------------------------ *
 * Crafted mini-mockups — one per pillar, hand-built, no stock icons.  *
 * ------------------------------------------------------------------ */

function JupyterMock() {
  return (
    <div className="space-y-2 font-mono text-[10.5px] leading-relaxed">
      <div className="flex items-center gap-2">
        <span className="rounded border border-[var(--color-border)] bg-[#141417] px-1.5 py-0.5 text-[9px] text-[var(--color-cyan)]">
          PyTorch
        </span>
        <span className="rounded border border-[var(--color-border)] bg-[#141417] px-1.5 py-0.5 text-[9px] text-[var(--color-faint)]">
          GPU 0 · 8&nbsp;GB
        </span>
        <span className="ml-auto flex items-center gap-1 text-[9px] text-[var(--color-green)]">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-green)]" /> kernel ready
        </span>
      </div>
      <div className="rounded-md border border-[var(--color-border-soft)] bg-[#0b0b0d] p-2.5">
        <div className="text-[var(--color-faint)]">
          In [<span className="text-[var(--color-accent)]">1</span>]:
        </div>
        <div className="mt-1 text-[var(--color-muted)]">
          <span className="text-[#c084fc]">import</span> torch
        </div>
        <div className="text-[var(--color-muted)]">
          torch.cuda.is_available()
        </div>
        <div className="mt-1.5 text-[var(--color-green)]">Out[1]: True</div>
      </div>
    </div>
  );
}

function ModelMock() {
  return (
    <div className="space-y-2 font-mono text-[10.5px]">
      <div className="flex items-center gap-2 rounded-md border border-[var(--color-border-soft)] bg-[#0b0b0d] px-2.5 py-1.5">
        <span className="rounded bg-[var(--color-accent-dim)] px-1.5 py-0.5 text-[9px] text-[#c7d2fe]">
          POST
        </span>
        <span className="text-[var(--color-muted)]">/v1/chat/completions</span>
        <span className="ml-auto h-1.5 w-1.5 rounded-full bg-[var(--color-green)]" />
      </div>
      <div className="space-y-1.5">
        {[
          ["llama3.1:8b", "ready", "var(--color-green)"],
          ["mistral-small", "ready", "var(--color-green)"],
          ["qwen2.5-coder", "pulling 71%", "var(--color-amber)"],
        ].map(([name, state, c]) => (
          <div
            key={name}
            className="flex items-center justify-between rounded border border-[var(--color-border-soft)] bg-[#0b0b0d] px-2 py-1"
          >
            <span className="text-[var(--color-muted)]">{name}</span>
            <span style={{ color: c }} className="text-[9px]">
              {state}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SandboxMock() {
  return (
    <div className="rounded-md border border-[var(--color-border-soft)] bg-[#0b0b0d] font-mono text-[10.5px] leading-relaxed">
      <div className="flex items-center gap-1.5 border-b border-[var(--color-border-soft)] px-2.5 py-1.5">
        <span className="h-2 w-2 rounded-full bg-[#2a2a2e]" />
        <span className="h-2 w-2 rounded-full bg-[#2a2a2e]" />
        <span className="h-2 w-2 rounded-full bg-[#2a2a2e]" />
        <span className="ml-1.5 text-[9px] text-[var(--color-faint)]">
          alpine · sandbox-7f3a
        </span>
      </div>
      <div className="space-y-1 p-2.5">
        <div className="text-[var(--color-muted)]">
          <span className="text-[var(--color-accent)]">$</span> ssh root@sandbox-7f3a
        </div>
        <div className="text-[var(--color-faint)]">
          identity: ~/.orqestra/keys/7f3a.pem
        </div>
        <div className="text-[var(--color-green)]">Welcome to Alpine Linux 3.20</div>
        <div className="text-[var(--color-muted)]">
          sandbox:~#{" "}
          <span className="cursor-blink inline-block h-3 w-[6px] translate-y-0.5 bg-[var(--color-accent)]" />
        </div>
      </div>
    </div>
  );
}

function HiveMock() {
  return (
    <svg viewBox="0 0 220 108" className="w-full" aria-hidden>
      <defs>
        <path id="p-a" d="M40 30 C 70 30, 90 54, 110 54" />
        <path id="p-b" d="M110 54 C 140 54, 160 30, 184 30" />
        <path id="p-c" d="M110 54 C 140 54, 160 82, 184 82" />
      </defs>
      {["p-a", "p-b", "p-c"].map((id, i) => (
        <g key={id} fill="none">
          <use href={`#${id}`} stroke="#27272a" strokeWidth={1.3} />
          <circle r={2} fill="#6366f1">
            <animateMotion dur="2.4s" begin={`${i * 0.5}s`} repeatCount="indefinite">
              <mpath href={`#${id}`} />
            </animateMotion>
          </circle>
        </g>
      ))}
      {[
        { x: 40, y: 30, c: "#6366f1", l: "CEO" },
        { x: 110, y: 54, c: "#22d3ee", l: "Dev" },
        { x: 184, y: 30, c: "#f59e0b", l: "QA" },
        { x: 184, y: 82, c: "#34d399", l: "Doc" },
      ].map((n) => (
        <g key={n.l}>
          <circle cx={n.x} cy={n.y} r={11} fill="#0d0d0f" stroke="#27272a" />
          <circle cx={n.x} cy={n.y} r={3} fill={n.c} />
        </g>
      ))}
    </svg>
  );
}

const pillars = [
  {
    n: "01",
    title: "Jupyter, on demand.",
    body: "Spin up a notebook in seconds — PyTorch, TensorFlow, R, or bare Python. Persistent volumes, GPU passthrough, a file browser built in.",
    mock: <JupyterMock />,
  },
  {
    n: "02",
    title: "Host any model.",
    body: "Pull from a unified catalog, get an OpenAI-compatible endpoint. Your models, your API, running on your silicon.",
    mock: <ModelMock />,
  },
  {
    n: "03",
    title: "Disposable Linux sandboxes.",
    body: "SSH into a fresh container, generated keys, gone when you're done. Host a custom server or just experiment.",
    mock: <SandboxMock />,
  },
  {
    n: "04",
    title: "AgentHive.",
    body: "Wire specialist agents into a swarm. Watch them delegate, hand off, and collaborate — live.",
    mock: <HiveMock />,
  },
];

export function Pillars() {
  return (
    <section id="pillars" className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <SectionHeader
        eyebrow="The platform"
        title="One platform. Four ways to run AI."
        subhead="Each one isolated, resource-capped, and yours."
      />

      <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-border)] sm:grid-cols-2">
        {pillars.map((p, i) => (
          <Reveal key={p.n} delay={i * 80}>
            <article className="group flex h-full flex-col gap-5 bg-[var(--color-bg-card)] p-6 transition-colors duration-300 hover:bg-[#111114] sm:p-8">
              {/* mockup frame */}
              <div className="relative overflow-hidden rounded-lg border border-[var(--color-border-soft)] bg-[#08080a] p-4">
                <div className="dot-grid absolute inset-0 opacity-40" />
                <div className="relative flex min-h-[124px] flex-col justify-center">
                  {p.mock}
                </div>
              </div>

              <div className="flex items-baseline gap-3">
                <span className="font-mono text-[11px] text-[var(--color-faint)]">
                  {p.n}
                </span>
                <h3 className="text-[17px] font-semibold tracking-tight">
                  {p.title}
                </h3>
              </div>
              <p className="-mt-2 text-[14px] leading-relaxed text-[var(--color-muted)]">
                {p.body}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
