import { Reveal } from "./reveal";
import { ThemeToggle } from "./theme-toggle";

function Bridge({ children }: { children: React.ReactNode }) {
  return (
    <Reveal className="mx-auto flex max-w-6xl items-center gap-4 px-6">
      <span
        aria-hidden="true"
        className="h-px flex-1 bg-gray-200 dark:bg-white/10"
      />
      <p className="whitespace-nowrap font-mono text-xs text-gray-400 dark:text-gray-600">
        {children}
      </p>
      <span
        aria-hidden="true"
        className="h-px flex-1 bg-gray-200 dark:bg-white/10"
      />
    </Reveal>
  );
}

const reasons = [
  {
    label: "Team",
    typical: "Account manager relaying to outsourced contractors",
    a03: "Direct access to the engineers building your product",
  },
  {
    label: "Process",
    typical: '"Agile" in name, chaos in practice',
    a03: "A fixed sequence — discovery, architecture, build, launch, support",
  },
  {
    label: "Cadence",
    typical: "A status update once a sprint",
    a03: "Working software and a live demo, every cycle",
  },
  {
    label: "After launch",
    typical: "Invoice sent, phone stops ringing",
    a03: "Monitoring, iteration, and a long-term partnership",
  },
];

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
    name: "Dr Ibiso Hart",
    category: "Portfolio · Web App",
    description:
      "A personal brand site for a certified lifestyle coach, built to convert visitors into discovery-session bookings.",
    link: "https://www.dribisohart.com/",
    image: "/images/projects/dr-ibiso.png",
  },
  {
    name: "Lifematics Lifestyle",
    category: "Lifestyle · Web App",
    description:
      "A coaching platform bringing together courses, workshops, and content under one brand for a growing personal-development business.",
    link: "https://lifematicswithdribisohart.com/",
    image: "/images/projects/lifematics.png",
  },
];

export function Landing() {
  return (
    <div className="bg-paper dark:bg-ink">
      {/* Header */}
      <header className="fixed inset-x-4 top-4 z-20 sm:inset-x-6">
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-2 rounded-full bg-paper/90 px-3 py-2 shadow-lg shadow-black/5 backdrop-blur-sm sm:px-6 sm:py-3 dark:bg-ink/90">
          <a href="/" className="flex min-w-0 items-center gap-2">
            <img
              src="/images/IMG_8060.png"
              alt="A03 Labs"
              className="h-6 w-auto shrink-0 dark:invert sm:h-8"
            />
            <span className="whitespace-nowrap font-mono text-xs font-medium tracking-[0.2em] text-gray-900 uppercase sm:text-sm dark:text-white">
              A03 Labs
            </span>
          </a>
          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <ThemeToggle />
            <a
              href="mailto:hia03labs@gmail.com"
              className="inline-flex items-center whitespace-nowrap rounded-full bg-teal-600 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-teal-500 sm:px-4 sm:py-2 sm:text-sm"
            >
              Get in touch
            </a>
          </div>
        </nav>
      </header>

      <main>
        {/* 00 — Hero */}
        <section className="px-6 pb-24 pt-40 sm:pb-32 sm:pt-48">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <Reveal className="flex flex-col items-center">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-teal-600 dark:text-teal-400">
                00 — A03 / Software & Product Studio
              </span>

              <h1 className="mt-5 text-balance font-display text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl dark:text-white">
                Software, engineered <br />
                not improvised.
              </h1>

              <p className="mt-6 max-w-lg text-pretty text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                We&rsquo;re a software and product studio that treats architecture as
                seriously as code. Discovery, design, and a real plan before
                a single sprint starts.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="mailto:hia03labs@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full bg-teal-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-teal-500"
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
                <button
                  type="button"
                  onClick={() =>
                    document
                      .getElementById("why")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="inline-flex items-center rounded-full px-6 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/5"
                >
                  Why A03 Labs
                </button>
              </div>

              <div className="mt-12 flex items-center gap-2 font-mono text-xs text-gray-500 dark:text-gray-500">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-500" />
                </span>
                Now taking on new projects
              </div>
            </Reveal>
          </div>
        </section>

        {/* <Bridge>// so what&rsquo;s actually different</Bridge> */}

        {/* 01 — Why A03 Labs */}
        <section id="why" className="bg-teal-600 px-6 py-24 sm:py-32 dark:bg-teal-900">
          <div className="mx-auto max-w-6xl">
            <Reveal className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-teal-100">
                  01 — Why A03 Labs
                </span>
                <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Fewer meetings. More shipped code.
                </h2>
              </div>
              <p className="max-w-sm text-pretty text-teal-50/80 sm:text-right">
                Most software agencies sell process theater. Here&rsquo;s what
                changes when you work with us.
              </p>
            </Reveal>

            <div className="mt-12 divide-y divide-white/15 font-mono text-xs sm:text-sm">
              {reasons.map((reason, index) => (
                <Reveal
                  key={reason.label}
                  delay={index * 100}
                  className="grid gap-2.5 py-6 first:pt-0 last:pb-0"
                >
                  <span className="text-teal-200/70">
                    // {reason.label}
                  </span>
                  <p className="flex gap-3 text-teal-50/50">
                    <span aria-hidden="true" className="select-none">
                      -
                    </span>
                    <span className="line-through decoration-teal-100/30">
                      {reason.typical}
                    </span>
                  </p>
                  <p className="flex gap-3 text-teal-200">
                    <span aria-hidden="true" className="select-none">
                      +
                    </span>
                    <span className="text-white">{reason.a03}</span>
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* <Bridge>// here&rsquo;s where it shows up</Bridge> */}

        {/* 02 — Capabilities */}
        <section id="capabilities" className="px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-6xl">
            <Reveal className="flex flex-wrap items-end justify-between gap-6 pb-8">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-teal-600 dark:text-teal-400">
                  02 — Capabilities
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

            <div className="flex flex-col">
              {capabilities.map((capability, index) => {
                const isLast = index === capabilities.length - 1;
                return (
                  <Reveal
                    key={capability.name}
                    delay={index * 80}
                    className={
                      isLast
                        ? "mt-4 flex flex-col gap-2 rounded-2xl bg-teal-600 px-6 py-8 sm:mt-6 sm:flex-row sm:items-baseline sm:gap-8 sm:px-8 dark:bg-teal-900"
                        : `flex flex-col gap-2 py-8 sm:flex-row sm:items-baseline sm:gap-8 ${index > 0 ? "border-t border-gray-200 dark:border-white/10" : ""}`
                    }
                  >
                    <span
                      className={
                        isLast
                          ? "font-mono text-sm text-teal-100 sm:w-10 sm:shrink-0"
                          : "font-mono text-sm text-teal-600 sm:w-10 sm:shrink-0 dark:text-teal-400"
                      }
                    >
                      {capability.index}
                    </span>
                    <h3
                      className={
                        isLast
                          ? "text-lg font-semibold text-white sm:w-64 sm:shrink-0"
                          : "text-lg font-semibold text-gray-900 sm:w-64 sm:shrink-0 dark:text-white"
                      }
                    >
                      {capability.name}
                    </h3>
                    <p
                      className={
                        isLast
                          ? "text-teal-50/80 sm:max-w-xl"
                          : "text-gray-600 sm:max-w-xl dark:text-gray-400"
                      }
                    >
                      {capability.description}
                    </p>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* <Bridge>// and how we get there</Bridge> */}

        {/* 03 — Process */}
        <section id="process" className="px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-6xl">
            <Reveal className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-teal-600 dark:text-teal-400">
                  03 — Process
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

            <div className="relative mt-12 overflow-hidden rounded-3xl bg-black/5 px-8 py-12 sm:px-12 dark:bg-white/5">
              <ol className="relative">
                <div
                  aria-hidden="true"
                  className="absolute bottom-6 left-6 top-6 w-px bg-gray-100 dark:bg-white/10"
                />
                {process.map((item, index) => (
                  <li key={item.title} className="relative pb-12 last:pb-0">
                    <Reveal
                      delay={index * 100}
                      className="group -mx-4 flex gap-6 rounded-2xl px-4 py-3 transition-colors duration-300 hover:bg-teal-500/10 dark:hover:bg-teal-400/10"
                    >
                      <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-teal-500/30 bg-white font-mono text-sm text-teal-600 transition-colors duration-300 group-hover:border-teal-600 group-hover:bg-teal-600 group-hover:text-white dark:bg-ink dark:text-teal-400">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="pt-1.5">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {item.title}
                        </h3>
                        <p className="mt-2 max-w-xl text-sm leading-relaxed text-gray-600 dark:text-gray-400">
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

        {/* <Bridge>// proof, not promises</Bridge> */}

        {/* 04 — Selected work */}
        <section className="px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-6xl">
            <Reveal className="max-w-2xl">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-teal-600 dark:text-teal-400">
                04 — Selected work
              </span>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                Projects we&rsquo;ve shipped
              </h2>
            </Reveal>

            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              {projects.map((project, index) => (
                <Reveal key={project.name} delay={index * 120}>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block overflow-hidden rounded-2xl shadow-md transition-shadow hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/20"
                  >
                    <div className="relative h-72 overflow-hidden bg-ink">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="h-full w-full object-cover transition-transform group-hover:scale-105"
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

        {/* <Bridge>// your turn</Bridge> */}

        {/* 05 — CTA */}
        <section className="px-6 py-24 sm:py-32">
          <div className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl bg-ink px-8 py-12 sm:px-12 sm:py-16 dark:bg-white">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.18)_1px,transparent_0)] bg-[size:28px_28px] dark:bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.08)_1px,transparent_0)]"
            />

            <Reveal className="relative">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-teal-400 dark:text-teal-600">
                05 — Get in touch
              </span>
              <h2 className="mt-4 text-balance font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl dark:text-gray-900">
                Have an idea?
                <br />
                Feel free to reach out.
              </h2>

              <div className="mt-10 flex flex-col items-stretch gap-4 rounded-3xl bg-white/10 p-4 sm:flex-row sm:items-center sm:justify-between sm:rounded-full sm:p-2 sm:pl-4 dark:bg-black/5">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 dark:bg-black/10">
                    <img
                      src="/images/IMG_8060.png"
                      alt=""
                      aria-hidden="true"
                      className="h-5 w-auto invert dark:invert-0"
                    />
                  </span>
                  <span className="text-sm font-medium text-white sm:text-base dark:text-gray-900">
                    Turn ideas into shipped software
                  </span>
                </div>
                <a
                  href="mailto:hia03labs@gmail.com"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-teal-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-teal-500 sm:justify-start"
                >
                  Get in Touch
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
