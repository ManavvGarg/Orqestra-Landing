import Link from "next/link";
import { ArrowRight, BookText } from "lucide-react";
import { Reveal } from "./reveal";
import { InstallCommand } from "./install-command";
import { GITHUB_URL, DOCS_URL } from "./site";

export function CTA() {
  return (
    <section className="relative overflow-hidden border-t border-[var(--color-border-soft)]">
      <div className="line-grid absolute inset-0 mask-fade-y opacity-60" />
      <div className="absolute bottom-0 left-1/2 h-[460px] w-[820px] -translate-x-1/2 glow-accent" />

      <div className="relative mx-auto max-w-3xl px-6 py-28 text-center sm:py-36">
        <Reveal>
          <h2 className="text-balance text-3xl font-semibold leading-[1.12] tracking-[-0.02em] sm:text-[42px]">
            AI tooling shouldn&rsquo;t mean renting
            <br className="hidden sm:block" /> someone else&rsquo;s computer.
          </h2>
        </Reveal>

        <Reveal delay={80}>
          <p className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-[var(--color-muted)]">
            Orqestra is open-source and self-hosted. Clone it, run it, own it.
          </p>
        </Reveal>

        <Reveal delay={140}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-lg bg-[var(--color-fg)] px-5 py-2.5 text-sm font-medium text-[var(--color-bg)] transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
            >
              Deploy Orqestra
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
            <Link
              href={DOCS_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-soft)] px-5 py-2.5 text-sm font-medium text-[var(--color-fg)] transition-colors hover:border-[var(--color-accent)]/50 hover:bg-[#141417]"
            >
              <BookText className="h-4 w-4" />
              Read the docs
            </Link>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="mx-auto mt-10 max-w-xl text-left">
            <InstallCommand variant="panel" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
