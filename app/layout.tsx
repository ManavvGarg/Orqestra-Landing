import "./globals.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

export const metadata: Metadata = {
  title: "Orqestra — Self-host Jupyter + LLMs from one dashboard",
  description:
    "Open-source container orchestration for notebooks and language models. Spin up Jupyter, host LLMs, manage everything from one dashboard. One-line install.",
  metadataBase: new URL("https://orqestra.xyz"),
  openGraph: {
    title: "Orqestra",
    description:
      "Self-host Jupyter notebooks and LLMs from one dashboard. One-line install on Linux or macOS.",
    url: "https://orqestra.xyz",
    siteName: "Orqestra",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orqestra",
    description: "Self-host Jupyter notebooks and LLMs from one dashboard.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
