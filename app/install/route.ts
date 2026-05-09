/**
 * GET /install
 *
 * Returns the bash bootstrap script with the right Content-Type so a curl-bash
 * one-liner works:
 *
 *   curl -fsSL https://orqestra.xyz/install | bash
 *
 * The script lives at scripts/install.sh in the main Orqestra repo. We fetch
 * it live so updates ship without redeploying this landing site.
 */

const UPSTREAM =
  process.env.ORQESTRA_INSTALL_SCRIPT_URL ??
  "https://www.orqestra.xyz/public/install.sh";

export const revalidate = 300; // 5-minute edge cache; install scripts shouldn't churn faster
export const runtime = "edge";

export async function GET() {
  try {
    const upstream = await fetch(UPSTREAM, {
      next: { revalidate },
      headers: { "User-Agent": "orqestra-landing/install-route" },
    });

    if (!upstream.ok) {
      return new Response(
        `# Failed to fetch install script (${upstream.status} from upstream).\n` +
          `# Try the raw URL directly:\n` +
          `#   curl -fsSL ${UPSTREAM} | bash\n`,
        {
          status: 502,
          headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "no-store",
          },
        },
      );
    }

    const body = await upstream.text();
    return new Response(body, {
      status: 200,
      headers: {
        "Content-Type": "text/x-shellscript; charset=utf-8",
        "Cache-Control": "public, max-age=300, s-maxage=300, stale-while-revalidate=86400",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch (e) {
    return new Response(
      `# Install endpoint error: ${e instanceof Error ? e.message : "unknown"}\n` +
        `# Fall back to raw URL:\n` +
        `#   curl -fsSL ${UPSTREAM} | bash\n`,
      {
        status: 500,
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
          "Cache-Control": "no-store",
        },
      },
    );
  }
}
