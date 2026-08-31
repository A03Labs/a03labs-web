/**
 * Single source of truth for how people reach us.
 * Shared by the contact page, the landing page, and the server-side action.
 */

export const CONTACT_EMAIL = "hello@a03labs.com";

/** Digits only, with country code — the format tel: and schema.org expect. */
export const PHONE_E164 = "2349160347158";

/** Human-readable form shown in the UI. */
export const PHONE_DISPLAY = "+234 916 034 7158";

export const TEL_HREF = `tel:+${PHONE_E164}`;

/**
 * WhatsApp short link. The destination number and the pre-filled message are
 * both configured on WhatsApp's side, so there's nothing to build here — and
 * changing the greeting means editing the link in WhatsApp, not this file.
 */
export const WHATSAPP_HREF = "https://wa.link/6zwdfh";
