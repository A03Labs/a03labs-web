/**
 * Delivers a contact-form enquiry to our inbox via FormSubmit.co.
 *
 * This runs in the browser: the site is built as static files with no server
 * behind it, so the POST goes straight from the visitor's page to FormSubmit.
 * That is what FormSubmit's AJAX endpoint is designed for — it sends CORS
 * headers, and it checks the `Origin`/`Referer` the browser attaches for us.
 */

/**
 * FormSubmit's random form key, which stands in for the destination inbox.
 * Where the mail lands is configured in FormSubmit, not here — so rotating
 * the inbox never touches this repo, and the address stays out of the code.
 *
 * Note this key ships inside the client bundle and is therefore public. That
 * is unavoidable without a server, and is how FormSubmit is normally used;
 * the key only lets someone send mail to our inbox, never read anything.
 */
const FORM_KEY =
  import.meta.env.VITE_FORMSUBMIT_KEY ?? "5c850eb28e97405cf5756d49b91a6cb6";

const ENDPOINT = `https://formsubmit.co/ajax/${FORM_KEY}`;

const MAX_MESSAGE_LENGTH = 5000;

export type Enquiry = {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  message: string;
};

/**
 * Mirrors the browser's own `required`/`type="email"` checks so the form still
 * refuses junk when native validation is bypassed.
 */
export function validateEnquiry(enquiry: Enquiry) {
  const errors: Record<string, string> = {};

  if (!enquiry.name) {
    errors.name = "Let us know who you are.";
  }
  if (!enquiry.email) {
    errors.email = "We need an email to reply to.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(enquiry.email)) {
    errors.email = "That doesn't look like a valid email address.";
  }
  if (!enquiry.message) {
    errors.message = "Tell us a little about the project.";
  } else if (enquiry.message.length > MAX_MESSAGE_LENGTH) {
    errors.message = `Please keep this under ${MAX_MESSAGE_LENGTH} characters.`;
  }

  return Object.keys(errors).length > 0 ? errors : null;
}

export async function sendEnquiry(enquiry: Enquiry) {
  let response: Response;

  try {
    response = await fetch(ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
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
      }),
    });
  } catch (error) {
    // fetch only rejects when the request never completed — offline, DNS,
    // CORS. Anything the server actually answered lands below.
    throw new Error(
      `FormSubmit request failed: ${error instanceof Error ? error.message : String(error)}`,
    );
  }

  // FormSubmit answers 200 with `success: "false"` for things like an inbox
  // that hasn't been activated yet, so the status alone isn't enough.
  const body = (await response.json().catch(() => null)) as
    | { success?: string; message?: string }
    | null;

  if (!response.ok || String(body?.success) !== "true") {
    throw new Error(
      `FormSubmit request failed: ${body?.message ?? response.statusText}`,
    );
  }
}
