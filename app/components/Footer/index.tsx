import cx from "classnames";
import { GitHub, Twitter, Linkedin } from "react-feather";

const iconClass = cx([
  "text-gray-400",
  "hover:text-accent-base",
  "transition-colors",
  "duration-300",
]);

export function Footer() {
  return (
    <footer
      className={cx([
        "w-full",
        "border-t",
        "border-gray-100",
        "mt-auto",
        "py-6",
      ])}
    >
      <div
        className={cx([
          "layout--outer",
          "flex",
          "flex-row",
          "items-center",
          "justify-between",
          "gap-4",
        ])}
      >
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Eric Bright
        </p>

        <div className="flex flex-row gap-4">
          <a
            href="https://github.com/ericbdev/"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className={iconClass}
          >
            <GitHub size={18} color="currentColor" />
          </a>
          <a
            href="https://twitter.com/ericbdev"
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter"
            className={iconClass}
          >
            <Twitter size={18} color="currentColor" />
          </a>
          <a
            href="https://www.linkedin.com/in/eric-bright/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className={iconClass}
          >
            <Linkedin size={18} color="currentColor" />
          </a>
        </div>
      </div>
    </footer>
  );
}
