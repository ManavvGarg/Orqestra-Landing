import { SectionHeader } from "./section-header";
import { Reveal } from "./reveal";

/* ---- pattern diagrams -------------------------------------------------- */

function HandoffDiagram() {
  const boxes = [
    { x: 6, label: "Intake", c: "#6366f1" },
    { x: 96, label: "Specialist", c: "#22d3ee" },
    { x: 186, label: "Closer", c: "#34d399" },
  ];
  return (
    <svg viewBox="0 0 264 72" className="w-full" aria-hidden>
      <defs>
        <path id="ho-track" d="M48 36 H96 M138 36 H186" />
      </defs>
      {/* connectors */}
      <g stroke="#3f3f46" strokeWidth={1.4} fill="none">
        <path d="M48 36 H92" markerEnd="url(#ho-arrow)" />
        <path d="M138 36 H182" markerEnd="url(#ho-arrow)" />
      </g>
      <defs>
        <marker id="ho-arrow" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
          <path d="M0 0 L6 3 L0 6 Z" fill="#52525b" />
        </marker>
      </defs>
      {/* control token sweeping fully across */}
      <circle r={3} fill="#6366f1">
        <animateMotion dur="3.2s" repeatCount="indefinite" path="M48 36 H96 M138 36 H186" />
        <animate attributeName="opacity" values="0;1;1;1;0" dur="3.2s" repeatCount="indefinite" />
      </circle>
      {boxes.map((b) => (
        <g key={b.label}>
          <rect x={b.x} y={20} width={42} height={32} rx={7} fill="#0d0d0f" stroke="#27272a" />
          <circle cx={b.x + 9} cy={36} r={2.6} fill={b.c} />
          <text x={b.x + 15} y={39} className="font-mono" fontSize={7.5} fill="#a1a1aa">
            {b.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

function OrchestratorDiagram() {
  const workers = [
    { x: 26, c: "#22d3ee" },
    { x: 110, c: "#f59e0b" },
    { x: 194, c: "#34d399" },
  ];
  return (
    <svg viewBox="0 0 264 116" className="w-full" aria-hidden>
      <defs>
        <marker id="ow-arrow" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
          <path d="M0 0 L6 3 L0 6 Z" fill="#52525b" />
        </marker>
      </defs>
      {/* orchestrator */}
      <rect x={96} y={8} width={72} height={30} rx={8} fill="#0d0d0f" stroke="#3f3f6a" />
      <circle cx={108} cy={23} r={2.8} fill="#6366f1" />
      <text x={115} y={26} className="font-mono" fontSize={7.5} fill="#a1a1aa">
        Orchestrator
      </text>
      {/* edges + delegate/collect tokens */}
      {workers.map((w, i) => {
        const id = `ow-${i}`;
        const d = `M132 38 C ${132} 64, ${w.x + 21} 56, ${w.x + 21} 78`;
        return (
          <g key={id}>
            <path id={id} d={d} fill="none" stroke="#27272a" strokeWidth={1.3} />
            {/* delegate (down) */}
            <circle r={2} fill="#6366f1">
              <animateMotion dur="2.6s" begin={`${i * 0.3}s`} repeatCount="indefinite">
                <mpath href={`#${id}`} />
              </animateMotion>
            </circle>
            {/* collect (up) */}
            <circle r={2} fill={w.c}>
              <animateMotion
                dur="2.6s"
                begin={`${i * 0.3 + 1.3}s`}
                repeatCount="indefinite"
                keyPoints="1;0"
                keyTimes="0;1"
              >
                <mpath href={`#${id}`} />
              </animateMotion>
            </circle>
            <rect x={w.x} y={78} width={42} height={30} rx={7} fill="#0d0d0f" stroke="#27272a" />
            <circle cx={w.x + 10} cy={93} r={2.6} fill={w.c} />
            <text x={w.x + 16} y={96} className="font-mono" fontSize={7} fill="#a1a1aa">
              Worker
            </text>
          </g>
        );
      })}
    </svg>
  );
}

/* ---- swarm builder mockup --------------------------------------------- */

const agents = [
  { name: "CEO", role: "orchestrator", model: "openai/gpt-4o", c: "#6366f1" },
  { name: "Researcher", role: "worker", model: "anthropic/claude", c: "#22d3ee" },
  { name: "Developer", role: "worker", model: "local/qwen2.5-coder", c: "#f59e0b" },
  { name: "QA", role: "worker", model: "groq/llama-3.1", c: "#34d399" },
];

function SwarmBuilder() {
  return (
    <div className="rounded-xl border border-[var(--color-border-soft)] bg-[#0b0b0d]">
      <div className="flex items-center justify-between border-b border-[var(--color-border-soft)] px-4 py-2.5">
        <span className="font-mono text-[11px] text-[var(--color-muted)]">
          swarm / research-pod
        </span>
        <span className="font-mono text-[10px] text-[var(--color-faint)]">
          4 agents · LiteLLM
        </span>
      </div>
      <div className="space-y-1.5 p-3">
        {agents.map((a) => (
          <div
            key={a.name}
            className="group flex items-center gap-3 rounded-lg border border-[var(--color-border-soft)] bg-[#0d0d0f] px-3 py-2.5 transition-colors hover:border-[var(--color-border)]"
          >
            <span
              className="h-2 w-2 shrink-0 rounded-full"
              style={{ backgroundColor: a.c }}
            />
            <span className="text-[13px] font-medium">{a.name}</span>
            <span className="rounded border border-[var(--color-border)] px-1.5 py-0.5 font-mono text-[9px] text-[var(--color-faint)]">
              {a.role}
            </span>
            <span className="ml-auto font-mono text-[10.5px] text-[var(--color-muted)]">
              {a.model}
            </span>
          </div>
        ))}
        <div className="flex items-center gap-2 rounded-lg border border-dashed border-[var(--color-border)] px-3 py-2 font-mono text-[10.5px] text-[var(--color-faint)]">
          + define agent — role, instructions, model
        </div>
      </div>
    </div>
  );
}

const patterns = [
  {
    name: "Handoff",
    diagram: <HandoffDiagram />,
    body: "Control transfers fully to a specialist. Sequential workflows, tight feedback.",
  },
  {
    name: "Orchestrator–Worker",
    diagram: <OrchestratorDiagram />,
    body: "One agent delegates, collects, and synthesizes. Parallel, high-autonomy tasks.",
  },
];

export function AgentHive() {
  return (
    <section id="agenthive" className="relative overflow-hidden border-y border-[var(--color-border-soft)]">
      <div className="dot-grid absolute inset-0 opacity-50" />
      <div className="absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 glow-accent opacity-70" />

      <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <SectionHeader
          eyebrow="AgentHive"
          title="Stop prompting one model. Orchestrate a team."
          subhead="Define agents with their own roles, instructions, and models. Connect them with explicit communication flows. Run OpenAI, Anthropic, Gemini, Groq — or your own local models — side by side in one swarm."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-[1fr_1fr] lg:gap-6">
          {/* builder */}
          <Reveal>
            <div className="h-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-1.5 card-shadow">
              <SwarmBuilder />
            </div>
          </Reveal>

          {/* patterns */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            {patterns.map((p, i) => (
              <Reveal key={p.name} delay={(i + 1) * 90}>
                <article className="flex h-full flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-5 transition-colors hover:border-[var(--color-accent)]/40">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-accent)]">
                      {p.name}
                    </span>
                  </div>
                  <div className="rounded-lg border border-[var(--color-border-soft)] bg-[#08080a] px-3 py-4">
                    {p.diagram}
                  </div>
                  <p className="mt-3 text-[13.5px] leading-relaxed text-[var(--color-muted)]">
                    {p.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={120}>
          <p className="mt-12 text-center font-mono text-[13px] text-[var(--color-muted)]">
            Every message streamed in real time.{" "}
            <span className="text-[var(--color-fg)]">Every step traceable.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
