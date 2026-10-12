import { SOCIAL_LINKS } from "../contact/contact-details";
import { getSocialIcon } from "./social-icons";

export function SiteFooter() {
  return (
    <footer className="border-t border-gray-200/60 px-6 py-10 dark:border-white/5">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="font-mono text-xs text-gray-500 dark:text-gray-500">
          &copy; {new Date().getFullYear()} A03 Labs. All rights reserved.
        </p>

        <div className="flex items-center gap-3">
          {SOCIAL_LINKS.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`A03 Labs on ${item.name}`}
              title={`A03 Labs on ${item.name}`}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 transition-all hover:-translate-y-0.5 hover:border-teal-500 hover:text-teal-600 hover:shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-gray-400 dark:hover:border-teal-400 dark:hover:text-teal-400"
            >
              {getSocialIcon(item.name, "h-4 w-4")}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
