/**
 * Hero visual — a live-looking mini AgentHive graph.
 * CEO orchestrates a Researcher + Writer; both feed a QA agent, which loops
 * feedback back to the CEO. Edges draw themselves, then messages pulse along
 * them. Pure SVG + SMIL + CSS — no JS, no layout cost, reduced-motion safe.
 */

type NodeDef = {
  id: string;
  label: string;
  role: string;
  x: number;
  y: number;
  color: string;
};

const W = 150;
const H = 56;

const nodes: NodeDef[] = [
  { id: "ceo", label: "CEO", role: "orchestrator", x: 165, y: 18, color: "#6366f1" },
  { id: "research", label: "Researcher", role: "gathers context", x: 22, y: 158, color: "#22d3ee" },
  { id: "writer", label: "Writer", role: "drafts output", x: 308, y: 158, color: "#f59e0b" },
  { id: "qa", label: "QA", role: "verifies + scores", x: 165, y: 300, color: "#34d399" },
];

// edges, drawn edge-of-box to edge-of-box
const edges = [
  { id: "e1", d: "M240 74 C 188 104, 140 122, 110 154", dur: "2.6s", begin: "0s", color: "#6366f1" },
  { id: "e2", d: "M252 74 C 320 104, 372 122, 396 154", dur: "2.6s", begin: "0.6s", color: "#6366f1" },
  { id: "e3", d: "M172 186 C 230 168, 282 168, 308 186", dur: "2.3s", begin: "1.2s", color: "#22d3ee" },
  { id: "e4", d: "M110 214 C 122 262, 168 290, 214 300", dur: "2.4s", begin: "1.6s", color: "#22d3ee" },
  { id: "e5", d: "M392 214 C 372 262, 312 290, 268 300", dur: "2.4s", begin: "2.0s", color: "#f59e0b" },
  // QA feedback loop back to CEO
  { id: "e6", d: "M180 328 C 40 312, 22 150, 60 70 C 78 36, 120 30, 162 38", dur: "3.4s", begin: "2.6s", color: "#34d399", dash: true },
];

export function AgentGraph() {
  return (
    <svg
      viewBox="0 0 470 372"
      className="h-full w-full overflow-visible"
      role="img"
      aria-label="A multi-agent swarm: a CEO agent delegates to a Researcher and a Writer, which both report to a QA agent that loops feedback back to the CEO."
    >
      <defs>
        {edges.map((e) => (
          <path key={`def-${e.id}`} id={e.id} d={e.d} />
        ))}
        <radialGradient id="node-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#6366f1" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
        </radialGradient>
        <filter id="soft" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="3" />
        </filter>
      </defs>

      {/* edges */}
      <g fill="none">
        {edges.map((e) => (
          <g key={e.id}>
            {/* base rail */}
            <use
              href={`#${e.id}`}
              stroke="#27272a"
              strokeWidth={1.4}
              strokeDasharray={e.dash ? "4 5" : undefined}
            />
            {/* self-drawing accent trace */}
            <use
              href={`#${e.id}`}
              stroke={e.color}
              strokeWidth={1.4}
              strokeLinecap="round"
              strokeDasharray="200"
              strokeDashoffset="200"
              opacity={0.55}
              style={{
                animation: `draw 1.4s cubic-bezier(0.16,1,0.3,1) ${e.begin} forwards`,
              }}
            />
          </g>
        ))}
      </g>

      {/* messages pulsing along edges */}
      <g>
        {edges.map((e) => (
          <g key={`msg-${e.id}`}>
            <circle r={6} fill={e.color} opacity={0.18} filter="url(#soft)">
              <animateMotion dur={e.dur} begin={e.begin} repeatCount="indefinite" rotate="auto">
                <mpath href={`#${e.id}`} />
              </animateMotion>
            </circle>
            <circle r={2.6} fill={e.color}>
              <animateMotion dur={e.dur} begin={e.begin} repeatCount="indefinite" rotate="auto">
                <mpath href={`#${e.id}`} />
              </animateMotion>
              <animate
                attributeName="opacity"
                values="0;1;1;0"
                dur={e.dur}
                begin={e.begin}
                repeatCount="indefinite"
              />
            </circle>
          </g>
        ))}
      </g>

      {/* nodes */}
      {nodes.map((n) => (
        <g key={n.id}>
          {n.id === "ceo" && (
            <ellipse cx={n.x + W / 2} cy={n.y + H / 2} rx={110} ry={70} fill="url(#node-glow)" />
          )}
          <rect
            x={n.x}
            y={n.y}
            width={W}
            height={H}
            rx={11}
            fill="#0d0d0f"
            stroke={n.id === "ceo" ? "#3f3f6a" : "#27272a"}
          />
          {/* role status dot */}
          <circle cx={n.x + 16} cy={n.y + 21} r={3.5} fill={n.color}>
            <animate
              attributeName="opacity"
              values="0.45;1;0.45"
              dur="2.4s"
              repeatCount="indefinite"
            />
          </circle>
          <text
            x={n.x + 28}
            y={n.y + 25}
            className="font-sans"
            fontSize={13}
            fontWeight={600}
            fill="#fafafa"
          >
            {n.label}
          </text>
          <text
            x={n.x + 16}
            y={n.y + 41}
            className="font-mono"
            fontSize={9.5}
            fill="#71717a"
          >
            {n.role}
          </text>
        </g>
      ))}
    </svg>
  );
}
