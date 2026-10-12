import type { Route } from "./+types/home";
import { Landing } from "../landing/landing";

const SITE_URL = "https://a03labs.com";
const TITLE = "A03 Labs — Websites, Apps & Digital Product Studio";
const DESCRIPTION =
  "A03 Labs designs and builds custom websites, mobile apps, and digital platforms for startups and businesses. Thoughtful design, clear communication, and dependable results.";
const OG_IMAGE = `${SITE_URL}/images/og-image.png`;

export function meta({ }: Route.MetaArgs) {
  return [
    { title: TITLE },
    { name: "description", content: DESCRIPTION },
    {
      name: "keywords",
      content:
        "software studio, web design, mobile apps, web development, product design, website hosting, tech consulting, A03 Labs",
    },
    { name: "robots", content: "index, follow" },
    { name: "author", content: "A03 Labs" },
    { tagName: "link", rel: "canonical", href: SITE_URL },

    // Open Graph
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "A03 Labs" },
    { property: "og:url", content: SITE_URL },
    { property: "og:title", content: TITLE },
    { property: "og:description", content: DESCRIPTION },
    { property: "og:image", content: OG_IMAGE },
    { property: "og:image:width", content: "1000" },
    { property: "og:image:height", content: "1000" },
    { property: "og:locale", content: "en_US" },

    // Twitter Card
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: TITLE },
    { name: "twitter:description", content: DESCRIPTION },
    { name: "twitter:image", content: OG_IMAGE },

    // Structured data (JSON-LD) — helps both classic SEO and AEO
    // (AI answer engines like ChatGPT/Perplexity lean on this to
    // verify who the business is and what it offers).
    {
      "script:ld+json": {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "A03 Labs",
        url: SITE_URL,
        logo: `${SITE_URL}/images/IMG_8060.png`,
        image: OG_IMAGE,
        description: DESCRIPTION,
        email: "hello@a03labs.com",
        priceRange: "$$",
        areaServed: "Worldwide",
        serviceType: [
          "Web & Mobile Apps",
          "Design & User Experience",
          "Hosting & Maintenance",
          "Tech Advice & Strategy",
        ],
      },
    },
  ];
}

export default function Home() {
  return <Landing />;
}
