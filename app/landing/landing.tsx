const services = [
  {
    name: "Web & Product Development",
    description:
      "Full-stack web and mobile applications built for speed, scale, and maintainability.",
  },
  {
    name: "Product Design",
    description:
      "User-centered UI/UX design that turns complex problems into simple, usable products.",
  },
  {
    name: "Cloud & DevOps",
    description:
      "Infrastructure, CI/CD, and cloud architecture so your team ships with confidence.",
  },
  {
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
    <div className="bg-white dark:bg-ink">
      {/* Header */}
      <header className="fixed inset-x-4 top-4 z-20 sm:inset-x-6">
        <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-gray-100 bg-white/90 px-6 py-3 shadow-lg shadow-black/5 backdrop-blur-sm dark:border-white/10 dark:bg-ink/90">
          <a href="/" className="flex items-center gap-2">
            <img
              src="/images/IMG_8060.png"
              alt="A03 Labs"
              className="h-8 w-auto dark:invert"
            />
            <span className="text-sm font-semibold tracking-[0.3em] text-gray-900 uppercase dark:text-white">
              A03 Labs
            </span>
          </a>
          <a
            href="mailto:hia03labs@gmail.com"
            className="inline-flex items-center rounded-full bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
          >
            Get in touch
          </a>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden px-6 py-24 sm:py-52">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
          >
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:72px_72px] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)]" />
            <div className="absolute left-1/2 top-0 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-teal-500/10 blur-3xl dark:bg-teal-500/15" />
          </div>

          <div className="relative mx-auto max-w-3xl text-center">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-100 bg-gray-50 px-4 py-1.5 text-xs font-medium text-gray-600 dark:border-white/10 dark:bg-gray-900 dark:text-gray-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Now taking on new projects
            </span>

            <h1 className="text-balance text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white">
              Software that moves your business forward
            </h1>

            <p className="mt-6 text-pretty text-lg leading-relaxed text-gray-600 dark:text-gray-400">
              A03 Labs is a software agency that designs, builds, and ships
              digital products for startups and growing teams.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:hia03labs@gmail.com"
                className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
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
                href="#services"
                className="inline-flex items-center rounded-full border border-gray-100 px-6 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-white/10 dark:text-gray-300 dark:hover:bg-gray-900"
              >
                What we do
              </a>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                What we do
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                End-to-end software services, from first sketch to production.
              </p>
            </div>

            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              {services.map((service) => (
                <div
                  key={service.name}
                  className="rounded-2xl border border-gray-100 p-6 dark:border-white/10"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {service.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <span className="text-xs font-semibold tracking-[0.3em] text-teal-600 uppercase dark:text-teal-400">
                  How we work
                </span>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                  From brief to shipped, no surprises
                </h2>
              </div>
              <p className="max-w-sm text-pretty text-gray-600 sm:text-right dark:text-gray-400">
                A clear, repeatable process that keeps projects on track and
                clients in the loop.
              </p>
            </div>

            <div className="relative mt-12 rounded-3xl bg-ink px-8 py-12 sm:px-12">
              <ol className="relative">
                <div
                  aria-hidden="true"
                  className="absolute top-6 bottom-6 left-6 w-px bg-white/10"
                />
                {process.map((item, index) => (
                  <li key={item.title} className="relative flex gap-6 pb-12 last:pb-0">
                    <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-teal-500/30 bg-ink text-sm font-semibold text-teal-400">
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
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                Selected work
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                A few of the products we&rsquo;ve helped design and build.
              </p>
            </div>

            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              {projects.map((project) => (
                <a
                  key={project.name}
                  href="#"
                  className="group overflow-hidden rounded-2xl border border-gray-100 transition-colors hover:border-gray-200 dark:border-white/10 dark:hover:border-white/20"
                >
                  <div className="relative flex h-48 items-center justify-center overflow-hidden bg-ink">
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px]"
                    />
                    <img
                      src="/images/IMG_8060.png"
                      alt=""
                      aria-hidden="true"
                      className="relative h-14 w-auto opacity-40 invert transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-medium tracking-wide text-teal-600 uppercase dark:text-teal-400">
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
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-24">
          <div className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl bg-ink px-8 py-12 sm:px-12 sm:py-16">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:56px_56px]"
            />

            <div className="relative">
              <h2 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Have an idea?
                <br />
                Feel free to reach out.
              </h2>

              <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-full border border-white/10 bg-white/5 p-2 pl-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
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
                  className="inline-flex items-center gap-2 rounded-full bg-teal-500 px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-teal-400"
                >
                  Contact us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="px-6 py-8 text-center text-xs text-gray-400 dark:text-gray-600">
        &copy; {new Date().getFullYear()} A03 Labs. All rights reserved.
      </footer>
    </div>
  );
}
