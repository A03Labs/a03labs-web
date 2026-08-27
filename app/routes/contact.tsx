import { data } from "react-router";
import type { Route } from "./+types/contact";
import { Contact } from "../contact/contact";
import { sendEnquiry } from "../contact/send-enquiry.server";
import { PHONE_E164 } from "../contact/contact-details";

const SITE_URL = "https://a03labs.com";
const PAGE_URL = `${SITE_URL}/contact`;
const TITLE = "Contact — A03 Labs";
const DESCRIPTION =
  "Start a project with A03 Labs. Tell us what you're building and we'll reply within one business day with a plan — scope, architecture direction, and a cost range in writing.";
const OG_IMAGE = `${SITE_URL}/images/og-image.png`;

export function meta({}: Route.MetaArgs) {
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
          email: "hia03labs@gmail.com",
          telephone: `+${PHONE_E164}`,
          areaServed: "Worldwide",
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "Sales",
            email: "hia03labs@gmail.com",
            telephone: `+${PHONE_E164}`,
            contactOption: "TollFree",
            availableLanguage: "English",
          },
        },
      },
    },
  ];
}

const MAX_MESSAGE_LENGTH = 5000;

function readField(formData: FormData, name: string) {
  const value = formData.get(name);
  return typeof value === "string" ? value.trim() : "";
}

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();

  const values = {
    name: readField(formData, "name"),
    email: readField(formData, "email"),
    company: readField(formData, "company"),
    projectType: readField(formData, "projectType"),
    budget: readField(formData, "budget"),
    message: readField(formData, "message"),
  };

  // Bots fill in every field they find; humans never see this one.
  if (readField(formData, "website")) {
    return { ok: true as const, errors: null, values: null };
  }

  const errors: Record<string, string> = {};

  if (!values.name) {
    errors.name = "Let us know who you are.";
  }
  if (!values.email) {
    errors.email = "We need an email to reply to.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "That doesn't look like a valid email address.";
  }
  if (!values.message) {
    errors.message = "Tell us a little about the project.";
  } else if (values.message.length > MAX_MESSAGE_LENGTH) {
    errors.message = `Please keep this under ${MAX_MESSAGE_LENGTH} characters.`;
  }

  if (Object.keys(errors).length > 0) {
    return data({ ok: false as const, errors, values }, { status: 400 });
  }

  try {
    await sendEnquiry(values);
  } catch (error) {
    console.error("Contact form delivery failed", error);
    return data(
      {
        ok: false as const,
        errors: {
          form: "Something went wrong sending that. Please email us directly and we'll pick it up.",
        },
        values,
      },
      { status: 500 },
    );
  }

  return { ok: true as const, errors: null, values: null };
}

export default function ContactRoute({ actionData }: Route.ComponentProps) {
  return <Contact actionData={actionData} />;
}
