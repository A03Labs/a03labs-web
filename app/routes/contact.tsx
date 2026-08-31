import type { Route } from "./+types/contact";
import { Contact } from "../contact/contact";
import { PHONE_E164 } from "../contact/contact-details";

const SITE_URL = "https://a03labs.com";
const PAGE_URL = `${SITE_URL}/contact`;
const TITLE = "Contact — A03 Labs";
const DESCRIPTION =
  "Start a project with A03 Labs. Tell us what you're building and we'll reply within one business day with a plan — scope, architecture direction, and a cost range in writing.";
const OG_IMAGE = `${SITE_URL}/images/og-image.png`;

export function meta({ }: Route.MetaArgs) {
  return [
    { title: TITLE },
    { name: "description", content: DESCRIPTION },
    {
      name: "keywords",
      content:
        "contact A03 Labs, hire software studio, start a project, software development enquiry, product design agency contact",
    },
    { name: "robots", content: "index, follow" },
    { name: "author", content: "A03 Labs" },
    { tagName: "link", rel: "canonical", href: PAGE_URL },

    // Open Graph
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "A03 Labs" },
    { property: "og:url", content: PAGE_URL },
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

    // Structured data (JSON-LD)
    {
      "script:ld+json": {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        name: TITLE,
        url: PAGE_URL,
        description: DESCRIPTION,
        mainEntity: {
          "@type": "ProfessionalService",
          name: "A03 Labs",
          url: SITE_URL,
          email: "hello.a03labs.com",
          telephone: `+${PHONE_E164}`,
          areaServed: "Worldwide",
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "Sales",
            email: "hello.a03labs.com",
            telephone: `+${PHONE_E164}`,
            contactOption: "TollFree",
            availableLanguage: "English",
          },
        },
      },
    },
  ];
}

export default function ContactRoute() {
  return <Contact />;
}
