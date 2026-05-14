import { SectionHeader } from "./section-header";
import { Reveal } from "./reveal";

/* A clean, technical spine — Go orchestrators over the Docker socket. */
function Box({
  x,
  y,
  w,
  h,
  label,
  sub,
  accent = false,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  sub?: string;
  accent?: boolean;
}) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={9}
        fill="#0d0d0f"
        stroke={accent ? "#3f3f6a" : "#27272a"}
      />
      <text
        x={x + w / 2}
        y={sub ? y + h / 2 - 3 : y + h / 2 + 4}
        textAnchor="middle"
        className="font-sans"
        fontSize={12}
        fontWeight={600}
        fill="#fafafa"
      >
        {label}
      </text>
      {sub && (
        <text
          x={x + w / 2}
          y={y + h / 2 + 12}
          textAnchor="middle"
          className="font-mono"
          fontSize={9}
          fill="#71717a"
        >
          {sub}
        </text>
      )}
    </g>
  );
}

const orchestrators = [
  { x: 196, label: "jupyter" },
  { x: 332, label: "hosting" },
  { x: 468, label: "agenthive" },
];

const containers = [
  { x: 60, label: "Notebooks" },
  { x: 230, label: "Model runners" },
  { x: 400, label: "SSH sandboxes" },
  { x: 570, label: "Agent harness" },
];

function Diagram() {
  return (
    <svg viewBox="0 0 800 470" className="w-full" role="img" aria-label="Orqestra architecture: the browser talks to a Next.js and tRPC layer, which drives Go orchestrators for Jupyter, model hosting, and AgentHive. Those orchestrators command the Docker engine via its socket to manage notebook, model, sandbox, and agent-harness containers. PostgreSQL holds state and Redis powers realtime pub/sub streamed back to the browser over WebSockets.">
      <defs>
        <marker id="ar" markerWidth="8" markerHeight="8" refX="4" refY="3" orient="auto">
          <path d="M0 0 L6 3 L0 6 Z" fill="#52525b" />
        </marker>
        <path id="spine" d="M390 56 V86 M390 138 V168 M390 252 V284 M390 328 V360" />
      </defs>

      {/* spine connectors */}
      <g stroke="#3f3f46" strokeWidth={1.4} fill="none">
        <path d="M390 56 V84" markerEnd="url(#ar)" />
        <path d="M390 138 V166" markerEnd="url(#ar)" />
        <path d="M390 252 V282" markerEnd="url(#ar)" />
        <path d="M390 328 V358" markerEnd="url(#ar)" />
      </g>
      {/* request pulse travelling down the spine */}
      <circle r={2.6} fill="#6366f1">
        <animateMotion
          dur="3.6s"
          repeatCount="indefinite"
          path="M390 56 V86 M390 138 V168 M390 252 V284 M390 328 V360"
        />
      </circle>

      {/* side rail connectors */}
      <g stroke="#27272a" strokeWidth={1.3} fill="none">
        <path d="M540 112 H636" markerEnd="url(#ar)" />
        <path d="M600 200 H636" />
        <path d="M540 200 H600" />
        {/* realtime dashed loop: redis -> browser */}
        <path d="M700 168 V112 M700 86 V40 H480" strokeDasharray="4 5" stroke="#3f3f6a" />
      </g>
      {/* realtime pulse going up to browser */}
      <circle r={2.4} fill="#34d399">
        <animateMotion
          dur="3s"
          repeatCount="indefinite"
          keyPoints="1;0"
          keyTimes="0;1"
          path="M480 40 H700 V112"
        />
      </circle>

      {/* nodes */}
      <Box x={300} y={14} w={180} h={42} label="Browser" sub="dashboard · WebSockets" />
      <Box x={240} y={86} w={300} h={52} label="Next.js  ·  tRPC" sub="web + api, end to end" accent />

      {/* orchestrator group */}
      <rect x={170} y={166} width={440} height={86} rx={11} fill="#0b0b0d" stroke="#27272a" />
      <text x={186} y={184} className="font-mono" fontSize={9.5} fill="#a1a1aa">
        Go orchestrators
      </text>
      {orchestrators.map((o) => (
        <g key={o.label}>
          <rect x={o.x} y={206} width={124} height={34} rx={7} fill="#0d0d0f" stroke="#27272a" />
          <circle cx={o.x + 14} cy={223} r={2.6} fill="#6366f1" />
          <text x={o.x + 24} y={226} className="font-mono" fontSize={10} fill="#fafafa">
            {o.label}
          </text>
        </g>
      ))}

      <Box x={240} y={284} w={300} h={44} label="Docker Engine" sub="/var/run/docker.sock" />

      {/* container group */}
      <rect x={44} y={358} width={712} height={66} rx={11} fill="#0b0b0d" stroke="#27272a" />
      {containers.map((c) => (
        <g key={c.label}>
          <rect x={c.x} y={374} width={150} height={36} rx={7} fill="#0d0d0f" stroke="#27272a" />
          <circle cx={c.x + 16} cy={392} r={2.6} fill="#34d399" />
          <text x={c.x + 26} y={395} className="font-mono" fontSize={9.5} fill="#a1a1aa">
            {c.label}
          </text>
        </g>
      ))}

      {/* side rail: data */}
      <Box x={636} y={86} w={128} h={52} label="PostgreSQL" sub="durable state" />
      <Box x={636} y={174} w={128} h={52} label="Redis" sub="pub/sub realtime" />

      {/* edge labels */}
      <text x={566} y={108} className="font-mono" fontSize={8} fill="#52525b">
        state
      </text>
      <text x={448} y={36} className="font-mono" fontSize={8} fill="#34d399">
        stream
      </text>
    </svg>
  );
}

const stack = [
  ["Web", "Next.js 15 · Tailwind v4"],
  ["API", "tRPC v11 · type-safe end to end"],
  ["Orchestrators", "Go · Docker SDK"],
  ["Data", "PostgreSQL 17 · Redis 7"],
];

export function Architecture() {
  return (
    <section
      id="architecture"
      className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32"
    >
      <SectionHeader
        eyebrow="Under the hood"
        title="Built like infrastructure, because it is."
        subhead="Lightweight Go orchestrators drive the Docker socket. tRPC end to end. Postgres for state, Redis for realtime. No magic — just a clean spine you can read."
      />

      <Reveal delay={80}>
        <div className="mt-14 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-5 card-shadow sm:p-8">
          <div className="relative overflow-hidden rounded-xl border border-[var(--color-border-soft)] bg-[#08080a] p-4 sm:p-7">
            <div className="dot-grid absolute inset-0 opacity-40" />
            <div className="relative">
              <Diagram />
            </div>
          </div>
        </div>
      </Reveal>

      <div className="mt-5 grid gap-px overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-border)] sm:grid-cols-4">
        {stack.map(([k, v], i) => (
          <Reveal key={k} delay={i * 70}>
            <div className="h-full bg-[var(--color-bg-card)] p-4">
              <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-faint)]">
                {k}
              </div>
              <div className="mt-1.5 text-[13px] text-[var(--color-muted)]">{v}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
