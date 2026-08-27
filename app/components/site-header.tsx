import { Link } from "react-router";
import { ThemeToggle } from "../landing/theme-toggle";

export function SiteHeader({
  cta = { label: "Get in touch", to: "/contact" },
}: {
  cta?: { label: string; to: string };
}) {
  return (
    <header className="fixed inset-x-4 top-4 z-20 sm:inset-x-6">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-2 rounded-full bg-paper/90 px-3 py-2 shadow-lg shadow-black/5 backdrop-blur-sm sm:px-6 sm:py-3 dark:bg-ink/90">
        <Link to="/" className="flex min-w-0 items-center gap-2">
          <img
            src="/images/IMG_8060.png"
            alt="A03 Labs"
            className="h-6 w-auto shrink-0 dark:invert sm:h-8"
          />
          <span className="whitespace-nowrap font-mono text-xs font-medium tracking-[0.2em] text-gray-900 uppercase sm:text-sm dark:text-white">
            A03 Labs
          </span>
        </Link>
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <Link
            to={cta.to}
            className="inline-flex items-center whitespace-nowrap rounded-full bg-teal-600 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-teal-500 sm:px-4 sm:py-2 sm:text-sm"
          >
            {cta.label}
          </Link>
        </div>
      </nav>
    </header>
  );
}
