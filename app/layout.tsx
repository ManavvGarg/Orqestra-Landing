import "./globals.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

export const metadata: Metadata = {
  title: "Orqestra — Your machine. Your models. Your swarm.",
  description:
    "Open-source, self-hosted AI orchestration. Turn the computer you already own into a full AI platform — notebooks, model hosting, sandboxes, and multi-agent swarms. No rented GPUs. No vendor lock-in.",
  metadataBase: new URL("https://orqestra.xyz"),
  keywords: [
    "AI orchestration",
    "self-hosted AI",
    "multi-agent",
    "Jupyter",
    "LLM hosting",
    "open source",
  ],
  openGraph: {
    title: "Orqestra — Your machine. Your models. Your swarm.",
    description:
      "Self-hosted AI orchestration: notebooks, model hosting, sandboxes, and multi-agent swarms. One install.",
    url: "https://orqestra.xyz",
    siteName: "Orqestra",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orqestra — Your machine. Your models. Your swarm.",
    description:
      "Self-hosted AI orchestration: notebooks, model hosting, sandboxes, and multi-agent swarms.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans antialiased selection:bg-[var(--color-accent)]">
        {children}
      </body>
    </html>
  );
}
