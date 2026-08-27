import type { Config } from "@react-router/dev/config";

export default {
  // Fully static — no server at runtime. The contact form posts straight from
  // the browser to FormSubmit's AJAX endpoint, so nothing here needs a
  // server `action`.
  ssr: false,
  // Pre-render every route at build time so each one ships real HTML for
  // crawlers instead of an empty SPA shell.
  prerender: ["/", "/contact"],
} satisfies Config;
