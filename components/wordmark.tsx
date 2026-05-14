/** Orqestra wordmark — a hand-drawn orchestration glyph + type. */
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        aria-hidden
        className="shrink-0"
      >
        {/* orchestrator node + three workers, the product in one glyph */}
        <circle cx="11" cy="4" r="2.4" fill="var(--color-accent)" />
        <circle cx="4" cy="17" r="2.1" stroke="#52525b" strokeWidth="1.4" />
        <circle cx="11" cy="17" r="2.1" stroke="#52525b" strokeWidth="1.4" />
        <circle cx="18" cy="17" r="2.1" stroke="#52525b" strokeWidth="1.4" />
        <path
          d="M11 6.4V10M11 10L4.6 15.2M11 10L11 14.6M11 10L17.4 15.2"
          stroke="#3f3f46"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
        <circle cx="11" cy="10" r="1.3" fill="var(--color-accent)" />
      </svg>
      <span className="text-[15px] font-semibold tracking-tight text-[var(--color-fg)]">
        Orqestra
      </span>
    </span>
  );
}
