import { Reveal } from "./reveal";

export function SectionHeader({
  eyebrow,
  title,
  subhead,
  align = "left",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subhead?: React.ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div
      className={
        align === "center"
          ? "mx-auto max-w-2xl text-center"
          : "max-w-2xl"
      }
    >
      {eyebrow && (
        <Reveal>
          <p className="mb-3 font-mono text-[12px] uppercase tracking-[0.18em] text-[var(--color-accent)]">
            {eyebrow}
          </p>
        </Reveal>
      )}
      <Reveal delay={60}>
        <h2 className="text-balance text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
          {title}
        </h2>
      </Reveal>
      {subhead && (
        <Reveal delay={120}>
          <p className="mt-4 text-pretty text-[15px] leading-relaxed text-[var(--color-muted)]">
            {subhead}
          </p>
        </Reveal>
      )}
    </div>
  );
}
