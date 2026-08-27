import type { Config } from "@react-router/dev/config";

export default {
  // Config options...
  // Server rendered. The contact form posts to a server `action` that relays
  // the enquiry to FormSubmit, so it needs a running server — SPA mode can't.
  ssr: false,
  // The marketing page is static, so pre-render it at build time. /contact is
  // deliberately left out: it is server-rendered on request (crawlers still
  // get full HTML) and pre-rendering a route that owns a form action buys
  // nothing.
  prerender: ["/"],
} satisfies Config;
