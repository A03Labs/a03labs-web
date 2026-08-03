import { Reveal } from "./reveal";

function CornerMarks() {
  return (
    <>
      <span
        aria-hidden="true"
        className="absolute left-3 top-3 h-3 w-3 border-l border-t border-teal-400/40"
      />
      <span
        aria-hidden="true"
        className="absolute right-3 top-3 h-3 w-3 border-r border-t border-teal-400/40"
      />
      <span
        aria-hidden="true"
        className="absolute bottom-3 left-3 h-3 w-3 border-b border-l border-teal-400/40"
      />
      <span
        aria-hidden="true"
        className="absolute bottom-3 right-3 h-3 w-3 border-b border-r border-teal-400/40"
      />
    </>
  );
}

const capabilities = [
  {
    index: "01",
    name: "Web & Product Development",
    description:
      "Full-stack web and mobile applications built for speed, scale, and maintainability.",
  },
  {
    index: "02",
    name: "Product Design",
    description:
      "User-centered UI/UX design that turns complex problems into simple, usable products.",
  },
  {
    index: "03",
    name: "Cloud & DevOps",
    description:
      "Infrastructure, CI/CD, and cloud architecture so your team ships with confidence.",
  },
  {
    index: "04",
    name: "Technical Consulting",
    description:
      "Hands-on advisory for teams navigating architecture decisions and technical debt.",
  },
];

const process = [
  {
    title: "Discovery",
    description:
      "We spend time understanding your business, your users, and the real problem — not just the feature list.",
  },
  {
    title: "Design & Architecture",
    description:
      "User flows, data models, and API contracts are defined upfront. We think before we build.",
  },
  {
    title: "Build",
    description:
      "Focused development cycles with regular demos and working software early — not just files and promises.",
  },
  {
    title: "Launch",
    description:
      "Full deployment, monitoring setup, and knowledge transfer. We don't disappear after go-live.",
  },
  {
    title: "Support",
    description:
      "Ongoing iteration and long-term engineering partnership. We're in it for the product's lifetime.",
  },
];

const projects = [
  {
    name: "Project One",
    category: "Fintech · Web App",
    description:
      "A short summary of the problem, what we built, and the outcome for the client.",
  },
  {
    name: "Project Two",
    category: "Healthcare · Mobile App",
    description:
      "A short summary of the problem, what we built, and the outcome for the client.",
  },
];

export function Landing() {
  return (
    <div className="bg-paper dark:bg-ink">
      {/* Header */}
      <header className="fixed inset-x-4 top-4 z-20 sm:inset-x-6">
        <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-gray-100 bg-paper/90 px-6 py-3 shadow-lg shadow-black/5 backdrop-blur-sm dark:border-white/10 dark:bg-ink/90">
          <a href="/" className="flex items-center gap-2">
            <img
              src="/images/IMG_8060.png"
              alt="A03 Labs"
              className="h-8 w-auto dark:invert"
            />
            <span className="font-mono text-sm font-medium tracking-[0.2em] text-gray-900 uppercase dark:text-white">
              A03 Labs
            </span>
          </a>
          <a
            href="mailto:hia03labs@gmail.com"
            className="inline-flex items-center rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-gray-50 dark:border-white/10 dark:hover:bg-gray-100"
          >
            Get in touch
          </a>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="px-6 pb-24 pt-40 sm:pb-32 sm:pt-48">
          <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <Reveal>
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-teal-600 dark:text-teal-400">
                A03 / Software Studio
              </span>

              <h1 className="mt-5 text-balance font-display text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl dark:text-white">
                We plan in blueprints.
                <br />
                We ship in production.
              </h1>

              <p className="mt-6 max-w-lg text-pretty text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                A03 Labs designs, architects, and builds software for startups
                that can&rsquo;t afford to guess twice — from first sketch to
                the systems running in front of real users.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="mailto:hia03labs@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-gray-50 dark:border-white/10 dark:hover:bg-gray-100"
                >
                  Start a project
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
                </a>
                <a
                  href="#process"
                  className="inline-flex items-center rounded-full border border-gray-200 px-6 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-white/10 dark:text-gray-300 dark:hover:bg-white/5"
                >
                  See how we work
                </a>
              </div>

              <div className="mt-12 flex items-center gap-2 font-mono text-xs text-gray-500 dark:text-gray-500">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-500" />
                </span>
                Now taking on new projects
              </div>
            </Reveal>

            <Reveal
              delay={150}
              className="relative mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-ink"
            >
              <CornerMarks />
              <div className="flex items-center gap-1.5 border-b border-white/10 px-5 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="ml-2 font-mono text-[11px] text-white/40">
                  a03 — build log
                </span>
              </div>
              <div className="space-y-2.5 p-6 font-mono text-xs sm:text-sm">
                <p className="text-white/40">$ a03 ship --client</p>
                {process.slice(0, -1).map((step) => (
                  <p
                    key={step.title}
                    className="flex items-center justify-between text-white/50"
                  >
                    <span>{step.title}</span>
                    <span className="text-teal-400">done</span>
                  </p>
                ))}
                <p className="flex items-center justify-between text-white/50">
                  <span>{process[process.length - 1].title}</span>
                  <span className="flex items-center gap-1.5 text-teal-400">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-teal-400" />
                    </span>
                    ongoing
                  </span>
                </p>
                <p className="pt-2 text-white">
                  shipped
                  <span className="ml-1 inline-block h-4 w-2 -translate-y-0.5 animate-pulse bg-teal-400 align-middle" />
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Capabilities */}
        <section id="capabilities" className="px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-6xl">
            <Reveal className="flex flex-wrap items-end justify-between gap-6 border-b border-gray-200 pb-8 dark:border-white/10">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-teal-600 dark:text-teal-400">
                  Capabilities
                </span>
                <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                  What we build and run
                </h2>
              </div>
              <p className="max-w-sm text-pretty text-gray-600 dark:text-gray-400">
                End-to-end software services, from first sketch to
                production.
              </p>
            </Reveal>

            <div className="divide-y divide-gray-200 dark:divide-white/10">
              {capabilities.map((capability, index) => (
                <Reveal
                  key={capability.name}
                  delay={index * 80}
                  className="flex flex-col gap-2 py-8 sm:flex-row sm:items-baseline sm:gap-8"
                >
                  <span className="font-mono text-sm text-teal-600 sm:w-10 sm:shrink-0 dark:text-teal-400">
                    {capability.index}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900 sm:w-64 sm:shrink-0 dark:text-white">
                    {capability.name}
                  </h3>
                  <p className="text-gray-600 sm:max-w-xl dark:text-gray-400">
                    {capability.description}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-6xl">
            <Reveal className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-teal-600 dark:text-teal-400">
                  Process
                </span>
                <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                  From brief to shipped, no surprises
                </h2>
              </div>
              <p className="max-w-sm text-pretty text-gray-600 sm:text-right dark:text-gray-400">
                A clear, repeatable sequence that keeps projects on track and
                clients in the loop.
              </p>
            </Reveal>

            <div className="relative mt-12 overflow-hidden rounded-2xl border border-white/10 bg-ink px-8 py-12 sm:px-12">
              <CornerMarks />
              <ol className="relative">
                <div
                  aria-hidden="true"
                  className="absolute bottom-6 left-6 top-6 w-px bg-white/10"
                />
                {process.map((item, index) => (
                  <li key={item.title} className="relative pb-12 last:pb-0">
                    <Reveal delay={index * 100} className="flex gap-6">
                      <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-teal-500/30 bg-ink font-mono text-sm text-teal-400">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="pt-1.5">
                        <h3 className="text-lg font-semibold text-white">
                          {item.title}
                        </h3>
                        <p className="mt-2 max-w-xl text-sm leading-relaxed text-gray-400">
                          {item.description}
                        </p>
                      </div>
                    </Reveal>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-6xl">
            <Reveal className="max-w-2xl">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-teal-600 dark:text-teal-400">
                Selected work
              </span>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                Products we&rsquo;ve shipped
              </h2>
            </Reveal>

            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              {projects.map((project, index) => (
                <Reveal key={project.name} delay={index * 120}>
                  <a
                    href="#"
                    className="group block overflow-hidden rounded-2xl border border-gray-100 transition-colors hover:border-gray-200 dark:border-white/10 dark:hover:border-white/20"
                  >
                    <div className="relative flex h-48 items-center justify-center overflow-hidden bg-ink">
                      <CornerMarks />
                      <img
                        src="/images/IMG_8060.png"
                        alt=""
                        aria-hidden="true"
                        className="relative h-14 w-auto opacity-30 invert transition-transform group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <span className="font-mono text-xs uppercase tracking-wide text-teal-600 dark:text-teal-400">
                        {project.category}
                      </span>
                      <h3 className="mt-2 text-lg font-semibold text-gray-900 dark:text-white">
                        {project.name}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                        {project.description}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-gray-900 dark:text-white">
                        View project
                        <svg
                          className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
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
                      </span>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-24 sm:py-32">
          <div className="relative mx-auto max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-ink px-8 py-12 sm:px-12 sm:py-16">
            <CornerMarks />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:56px_56px]"
            />

            <Reveal className="relative">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-teal-400">
                // Get in touch
              </span>
              <h2 className="mt-4 text-balance font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Have an idea?
                <br />
                Feel free to reach out.
              </h2>

              <div className="mt-10 flex flex-col items-stretch gap-4 rounded-3xl border border-white/10 bg-white/5 p-4 sm:flex-row sm:items-center sm:justify-between sm:rounded-full sm:p-2 sm:pl-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                    <img
                      src="/images/IMG_8060.png"
                      alt=""
                      aria-hidden="true"
                      className="h-5 w-auto invert"
                    />
                  </span>
                  <span className="text-sm font-medium text-white sm:text-base">
                    Turn ideas into shipped software
                  </span>
                </div>
                <a
                  href="mailto:hia03labs@gmail.com"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-gray-50 sm:justify-start dark:border-white/10 dark:hover:bg-gray-100"
                >
                  Contact us
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="px-6 py-8 text-center font-mono text-xs text-gray-400 dark:text-gray-600">
        &copy; {new Date().getFullYear()} A03 Labs. All rights reserved.
      </footer>
    </div>
  );
}
