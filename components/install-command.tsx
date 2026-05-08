"use client";

import { useState } from "react";
import { Check, Copy, Terminal } from "lucide-react";

const CMD = "curl -fsSL https://orqestra.xyz/install | bash";

export function InstallCommand({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText(CMD);
    setCopied(true);
    setTimeout(() => setCopied(false), 1400);
  }

  const padding = size === "lg" ? "px-5 py-4" : size === "sm" ? "px-3 py-2" : "px-4 py-3";
  const fontSize = size === "lg" ? "text-base" : size === "sm" ? "text-xs" : "text-sm";

  return (
    <div className="group relative inline-flex max-w-full items-stretch overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-soft)] code-shadow">
      <div className={`flex items-center gap-2 ${padding} pr-2`}>
        <Terminal className="h-4 w-4 text-[var(--color-muted)]" />
        <code className={`overflow-x-auto whitespace-nowrap font-mono ${fontSize} text-[var(--color-fg)]`}>
          <span className="text-[var(--color-muted)]">$ </span>
          {CMD}
        </code>
      </div>
      <button
        onClick={copy}
        aria-label="Copy install command"
        className="flex items-center gap-1.5 border-l border-[var(--color-border)] bg-white/[0.02] px-3 text-xs text-[var(--color-muted)] transition hover:bg-white/5 hover:text-[var(--color-fg)]"
      >
        {copied ? (
          <>
            <Check className="h-3.5 w-3.5 text-[var(--color-success)]" />
            <span className="text-[var(--color-success)]">Copied</span>
          </>
        ) : (
          <>
            <Copy className="h-3.5 w-3.5" />
            <span>Copy</span>
          </>
        )}
      </button>
    </div>
  );
}
