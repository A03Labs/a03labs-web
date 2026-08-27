import { Form, useNavigation } from "react-router";
import { Reveal } from "../landing/reveal";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";
import {
  CONTACT_EMAIL,
  PHONE_DISPLAY,
  TEL_HREF,
  WHATSAPP_HREF,
} from "./contact-details";

const projectTypes = [
  "Web & Product Development",
  "Product Design",
  "Cloud & DevOps",
  "Technical Consulting",
  "Not sure yet",
];


export type ContactActionData =
  | {
      ok: boolean;
      errors: Record<string, string> | null;
      values: Record<string, string> | null;
    }
  | undefined;

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.174.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.82 9.82 0 0 1 6.988 2.898 9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.82 11.82 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.88 11.88 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.82 11.82 0 0 0 20.465 3.49" />
    </svg>
  );
}

function SuccessPanel() {
  return (
    <div className="rounded-3xl bg-black/5 p-6 sm:p-10 dark:bg-white/5">
      <span className="font-mono text-xs uppercase tracking-[0.25em] text-teal-600 dark:text-teal-400">
        01 — Message sent
      </span>
      <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl dark:text-white">
        Thanks — it&rsquo;s in our inbox.
      </h2>
      <p className="mt-4 max-w-md text-pretty leading-relaxed text-gray-600 dark:text-gray-400">
        We read every enquiry ourselves and reply within one business day. If
        it&rsquo;s urgent, WhatsApp is the fastest way to reach us.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={WHATSAPP_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          <WhatsAppIcon className="h-4 w-4" />
          Message us on WhatsApp
        </a>
        <a
          href="/"
          className="inline-flex items-center rounded-full px-6 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/5"
        >
          Back to home
        </a>
      </div>
    </div>
  );
}

export function Contact({ actionData }: { actionData?: ContactActionData }) {
  const navigation = useNavigation();
  const submitting = navigation.state === "submitting";

  const errors = actionData?.errors ?? null;
  const previous = actionData?.values ?? null;
  const succeeded = actionData?.ok === true;

  const fieldClass =
    "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:border-teal-600 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-gray-600 dark:focus:border-teal-400";
  const errorFieldClass =
    "w-full rounded-xl border border-red-500 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:border-red-500 dark:border-red-500 dark:bg-white/5 dark:text-white dark:placeholder:text-gray-600";
  const labelClass =
    "mb-2 block font-mono text-xs uppercase tracking-[0.15em] text-gray-500 dark:text-gray-500";

  const input = (field: string) => (errors?.[field] ? errorFieldClass : fieldClass);

  function FieldError({ field }: { field: string }) {
    if (!errors?.[field]) return null;
    return (
      <p className="mt-2 font-mono text-xs text-red-500">{errors[field]}</p>
    );
  }

  return (
    <div className="bg-paper dark:bg-ink">
      <SiteHeader cta={{ label: "Back to home", to: "/" }} />

      <main>
        {/* 00 — Intro */}
        <section className="px-6 pb-16 pt-40 sm:pt-48">
          <div className="mx-auto max-w-6xl">
            <Reveal className="max-w-2xl">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-teal-600 dark:text-teal-400">
                00 — Get in touch
              </span>
              <h1 className="mt-5 text-balance font-display text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl dark:text-white">
                Tell us what you&rsquo;re building.
              </h1>
              <p className="mt-6 max-w-lg text-pretty text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                Whether it&rsquo;s a rough idea or a spec that&rsquo;s already
                been through three teams — send it over. We&rsquo;ll tell you
                honestly whether we&rsquo;re the right studio for it.
              </p>

              <div className="mt-8 flex items-center gap-2 font-mono text-xs text-gray-500 dark:text-gray-500">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-500" />
                </span>
                Now taking on new projects
              </div>
            </Reveal>
          </div>
        </section>

        {/* 01 — Form + details */}
        <section className="px-6 pb-24 sm:pb-32">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-5 lg:gap-16">
            {/* Form */}
            <Reveal className="lg:col-span-3">
              {succeeded ? (
                <SuccessPanel />
              ) : (
                <div className="rounded-3xl bg-black/5 p-6 sm:p-10 dark:bg-white/5">
                  <span className="font-mono text-xs uppercase tracking-[0.25em] text-teal-600 dark:text-teal-400">
                    01 — Project brief
                  </span>
                  <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl dark:text-white">
                    Start the conversation
                  </h2>

                  <Form method="post" className="mt-8 grid gap-6">
                    {/* Honeypot — hidden from people, catnip for bots. */}
                    <input
                      type="text"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                      className="hidden"
                    />

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className={labelClass}>
                          Name
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          autoComplete="name"
                          defaultValue={previous?.name ?? ""}
                          aria-invalid={Boolean(errors?.name)}
                          placeholder="Ada Lovelace"
                          className={input("name")}
                        />
                        <FieldError field="name" />
                      </div>
                      <div>
                        <label htmlFor="email" className={labelClass}>
                          Email
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          autoComplete="email"
                          defaultValue={previous?.email ?? ""}
                          aria-invalid={Boolean(errors?.email)}
                          placeholder="you@company.com"
                          className={input("email")}
                        />
                        <FieldError field="email" />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="company" className={labelClass}>
                        Company <span className="normal-case">(optional)</span>
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        autoComplete="organization"
                        defaultValue={previous?.company ?? ""}
                        placeholder="Acme Inc."
                        className={fieldClass}
                      />
                    </div>

                    <div className="grid gap-6">
                      <div>
                        <label htmlFor="projectType" className={labelClass}>
                          What you need
                        </label>
                        <select
                          id="projectType"
                          name="projectType"
                          defaultValue={previous?.projectType ?? ""}
                          className={fieldClass}
                        >
                          <option value="">Select one</option>
                          {projectTypes.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>
                      
                    </div>

                    <div>
                      <label htmlFor="message" className={labelClass}>
                        About the project
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        defaultValue={previous?.message ?? ""}
                        aria-invalid={Boolean(errors?.message)}
                        placeholder="What are you building, who is it for, and where are you stuck?"
                        className={`${input("message")} resize-y`}
                      />
                      <FieldError field="message" />
                    </div>

                    {errors?.form ? (
                      <p className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 font-mono text-xs text-red-500">
                        {errors.form}
                      </p>
                    ) : null}

                    <div className="flex flex-wrap items-center gap-4">
                      <button
                        type="submit"
                        disabled={submitting}
                        className="inline-flex items-center gap-2 rounded-full bg-teal-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-teal-500 disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        {submitting ? "Sending…" : "Send message"}
                        {submitting ? null : (
                          <svg
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M13.5 4.5 21 12l-7.5 7.5M21 12H3"
                            />
                          </svg>
                        )}
                      </button>
                      <p
                        aria-live="polite"
                        className="font-mono text-xs text-gray-500 dark:text-gray-500"
                      >
                        Goes straight to our inbox.
                      </p>
                    </div>
                  </Form>
                </div>
              )}
            </Reveal>

            {/* Details */}
            <div className="lg:col-span-2">
              <Reveal delay={120}>
                <div className="rounded-3xl bg-teal-600 p-6 sm:p-8 dark:bg-teal-900">
                  <span className="font-mono text-xs uppercase tracking-[0.25em] text-teal-100">
                    02 — Direct
                  </span>
                  <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-white">
                    Prefer to skip the form?
                  </h2>

                  <a
                    href={WHATSAPP_HREF}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    Text us on WhatsApp
                  </a>

                  <dl className="mt-6 divide-y divide-white/15 font-mono text-sm">
                    <div className="py-4 first:pt-0">
                      <dt className="text-xs text-teal-200/70">// Phone</dt>
                      <dd className="mt-1.5 text-white">
                        <a
                          href={TEL_HREF}
                          className="underline decoration-teal-200/40 underline-offset-4 transition-colors hover:decoration-white"
                        >
                          {PHONE_DISPLAY}
                        </a>
                      </dd>
                    </div>
                    <div className="py-4">
                      <dt className="text-xs text-teal-200/70">// Email</dt>
                      <dd className="mt-1.5 break-words text-white">
                        <a
                          href={`mailto:${CONTACT_EMAIL}`}
                          className="underline decoration-teal-200/40 underline-offset-4 transition-colors hover:decoration-white"
                        >
                          {CONTACT_EMAIL}
                        </a>
                      </dd>
                    </div>
                  
                  </dl>
                </div>
              </Reveal>

             
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
