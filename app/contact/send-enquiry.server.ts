/**
 * Delivers a contact-form enquiry to our inbox via FormSubmit.co.
 *
 * No API key or DNS setup needed — just an activated form key.
 *
 * The `.server.ts` suffix keeps this module out of the browser bundle.
 */
import axios from "axios";

/**
 * FormSubmit's random form key, which stands in for the destination inbox.
 * Where the mail lands is configured in FormSubmit, not here — so rotating
 * the inbox never touches this repo, and the address stays out of the code.
 */
const FORM_KEY = process.env.FORMSUBMIT_KEY ?? "5c850eb28e97405cf5756d49b91a6cb6";

const ENDPOINT = `https://formsubmit.co/ajax/${FORM_KEY}`;

/**
 * FormSubmit refuses requests with no `Referer`/`Origin` ("Make sure you open
 * this page through a web server..."). A browser sets those automatically;
 * this call is server-to-server, so we have to send them ourselves.
 */
const SITE_ORIGIN = process.env.SITE_URL ?? "https://a03labs.com";

export type Enquiry = {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  message: string;
};

export async function sendEnquiry(enquiry: Enquiry) {
  try {
    const { data } = await axios.post(
      ENDPOINT,
      {
        _subject: `New project enquiry — ${enquiry.name}`,
        _template: "table",
        _captcha: "false",
        // FormSubmit points the notification's Reply-To at this address.
        _replyto: enquiry.email,
        name: enquiry.name,
        email: enquiry.email,
        company: enquiry.company || "—",
        "project type": enquiry.projectType || "—",
        budget: enquiry.budget || "—",
        message: enquiry.message,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Origin: SITE_ORIGIN,
          Referer: `${SITE_ORIGIN}/contact`,
        },
        timeout: 15_000,
      },
    );

    // FormSubmit answers 200 with `success: "false"` for things like an
    // inbox that hasn't been activated yet, so the status alone isn't enough.
    if (String(data?.success) !== "true") {
      throw new Error(data?.message ?? "FormSubmit rejected the message.");
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const detail =
        (error.response?.data as { message?: string } | undefined)?.message ??
        error.message;
      throw new Error(`FormSubmit request failed: ${detail}`);
    }
    throw error;
  }
}
