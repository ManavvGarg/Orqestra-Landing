export function Architecture() {
  return (
    <section className="relative mx-auto max-w-5xl px-6 py-24">
      <div className="mb-10 max-w-2xl">
        <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[var(--color-accent)]">
          How it works
        </p>
        <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          Boring stack. Predictable behavior.
        </h2>
        <p className="mt-4 text-[var(--color-muted)]">
          Every piece is something you've heard of. Postgres, Redis, Docker, Traefik. The
          orchestrators are small Go binaries that talk to the Docker socket — nothing magic
          underneath.
        </p>
      </div>

      <pre className="overflow-x-auto rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-soft)] p-6 font-mono text-xs leading-6 text-[var(--color-fg)] code-shadow sm:text-sm">
{`                  browser
                     │
                     ▼
   ┌──────── Traefik (server mode) ────────┐
   │  *.{domain} → routes by Host header   │
   └─┬───────────────┬───────┬─────────────┘
     │               │       │
     ▼               ▼       ▼
   web (3000)    api (4000)  ws (4001)
                     │              │
                     │  ┌───────────┘
                     ▼  ▼
                  Postgres + Redis
                     │
                     ├─→ orchestrator-jupyter (8080) ─→ Docker socket
                     │      └─ creates jupyter/* containers, manages volumes
                     │
                     └─→ orchestrator-hosting (8081) ─→ Docker socket
                            ├─ creates ollama/ollama containers per model
                            ├─ talks to Docker Model Runner via /v1/...
                            └─ scrapes Hub + Ollama for live catalog`}
      </pre>

      <div className="mt-8 grid grid-cols-2 gap-3 text-xs sm:grid-cols-4">
        {[
          ["API", "Bun · Hono · tRPC v11"],
          ["Web", "Next.js 15 · Tailwind v4"],
          ["Orchestrators", "Go · Gin · Docker SDK"],
          ["Data", "Postgres 17 · Redis 7"],
        ].map(([k, v]) => (
          <div key={k} className="rounded-md border border-[var(--color-border)] p-3">
            <div className="text-[10px] uppercase tracking-wider text-[var(--color-muted)]">{k}</div>
            <div className="mt-1 font-mono text-xs">{v}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
