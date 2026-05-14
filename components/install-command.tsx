"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { INSTALL_CMD } from "./site";

/**
 * Polished, copyable terminal block for the one-line installer.
 * `variant="inline"` is the compact hero pill; `variant="panel"` is the
 * full window-chrome block used in the final CTA.
 */
export function InstallCommand({
  variant = "inline",
}: {
  variant?: "inline" | "panel";
}) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(INSTALL_CMD);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard unavailable — no-op */
    }
  }

  if (variant === "panel") {
    return (
      <div className="overflow-hidden rounded-xl border border-[var(--color-border)] bg-[#0c0c0e] code-shadow">
        <div className="flex items-center gap-2 border-b border-[var(--color-border-soft)] px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#2a2a2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#2a2a2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#2a2a2e]" />
          <span className="ml-2 font-mono text-[11px] text-[var(--color-faint)]">
            bash
          </span>
          <button
            onClick={copy}
            aria-label="Copy install command"
            className="group ml-auto inline-flex items-center gap-1.5 rounded-md border border-[var(--color-border)] px-2 py-1 text-[11px] text-[var(--color-muted)] transition-colors hover:border-[var(--color-accent)]/50 hover:text-[var(--color-fg)]"
          >
            {copied ? (
              <>
                <Check className="h-3 w-3 text-[var(--color-green)]" />
                <span className="text-[var(--color-green)]">Copied</span>
              </>
            ) : (
              <>
                <Copy className="h-3 w-3" />
                Copy
              </>
            )}
          </button>
        </div>
        <div className="flex items-center gap-3 px-4 py-4 font-mono text-[13px] sm:text-sm">
          <span className="select-none text-[var(--color-accent)]">$</span>
          <code className="overflow-x-auto whitespace-nowrap text-[var(--color-fg)]">
            {INSTALL_CMD}
          </code>
          <span className="cursor-blink ml-0.5 inline-block h-4 w-[7px] shrink-0 bg-[var(--color-accent)]" />
        </div>
      </div>
    );
  }

  return (
    <button
      onClick={copy}
      aria-label="Copy install command"
      className="group inline-flex max-w-full items-center gap-3 overflow-hidden rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-soft)] px-4 py-2.5 font-mono text-[13px] transition-colors hover:bg-[#141417] hover:ring-1 hover:ring-[var(--color-accent)]/30"
    >
      <span className="select-none text-[var(--color-faint)]">$</span>
      <code className="overflow-x-auto whitespace-nowrap text-[var(--color-muted)] transition-colors group-hover:text-[var(--color-fg)]">
        {INSTALL_CMD}
      </code>
      <span className="ml-auto shrink-0 text-[var(--color-faint)] transition-colors group-hover:text-[var(--color-fg)]">
        {copied ? (
          <Check className="h-3.5 w-3.5 text-[var(--color-green)]" />
        ) : (
          <Copy className="h-3.5 w-3.5" />
        )}
      </span>
    </button>
  );
}
