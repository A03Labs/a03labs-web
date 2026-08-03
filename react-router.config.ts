import type { Config } from "@react-router/dev/config";

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: false,
  // Pre-render the static HTML at build time so crawlers (search + AI/AEO
  // bots) get full content without executing JS.
  prerender: ["/"],
} satisfies Config;
