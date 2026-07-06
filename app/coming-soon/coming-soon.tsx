export function ComingSoon() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-white px-6 dark:bg-gray-950">
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:48px_48px] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)]" />
        <div className="absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-500/15" />
      </div>

      <div className="relative flex max-w-2xl flex-col items-center text-center">
        {/* Wordmark */}
        <span className="mb-10 inline-flex items-center gap-2 text-sm font-semibold tracking-[0.3em] text-gray-500 uppercase dark:text-gray-400">
          A03 Labs
        </span>

        {/* Status badge */}
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-1.5 text-xs font-medium text-gray-600 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Work in progress
        </span>

        <h1 className="text-balance text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white">
          We&rsquo;re currently building our website
        </h1>

        <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-gray-600 dark:text-gray-400">
          Something new is on the way. We&rsquo;re putting the finishing
          touches on our site &mdash; check back soon.
        </p>

        {/* Contact */}
        <a
          href="mailto:hia03labs@gmail.com"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
        >
          Get in touch
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
      </div>

      <footer className="absolute bottom-8 text-xs text-gray-400 dark:text-gray-600">
        &copy; {new Date().getFullYear()} A03 Labs. All rights reserved.
      </footer>
    </main>
  );
}
