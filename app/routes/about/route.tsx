import type { V2_MetaFunction } from "@remix-run/node";
import cx from "classnames";

export const meta: V2_MetaFunction = () => [
  { title: "About | @ericbdev" },
  {
    name: "description",
    content:
      "Eric Bright — software developer who builds functional systems and brings ideas to life.",
  },
  { property: "og:title", content: "About | @ericbdev" },
  {
    property: "og:description",
    content:
      "Eric Bright — software developer who builds functional systems and brings ideas to life.",
  },
  { property: "og:type", content: "profile" },
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:creator", content: "@ericbdev" },
];

const sectionClass = cx(["mb-10"]);
const headingClass = cx(["text-2xl", "font-bold", "font-display", "mb-4", "text-accent-dark"]);
const bodyClass = cx(["text-base", "leading-relaxed", "text-gray-700"]);

const skills = [
  "TypeScript",
  "React",
  "Remix",
  "Node.js",
  "Tailwind CSS",
  "HTML & CSS",
  "REST APIs",
  "Git",
];

const links = [
  { label: "GitHub", href: "https://github.com/ericbdev/" },
  { label: "Twitter / X", href: "https://twitter.com/ericbdev" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/eric-bright/" },
];

export default function Component() {
  return (
    <div className="mx-auto max-w-screen-lg px-6 py-16">
      <h1 className="leading-tight text-6xl font-bold font-display mb-12">
        About
      </h1>

      <div className={sectionClass}>
        <p className={cx([bodyClass, "text-lg", "mb-4"])}>
          I'm Eric — a software developer who enjoys building functional systems
          and bringing ideas to life.
        </p>
        <p className={bodyClass}>
          This site is more playground than portfolio. I use it to practice, experiment,
          and occasionally ship my own ideas. I care about clean code, good UX, and
          systems that actually work.
        </p>
      </div>

      <div className={sectionClass}>
        <h2 className={headingClass}>Technologies</h2>
        <ul className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <li
              key={skill}
              className="px-3 py-1 rounded-full border border-accent-base text-accent-dark text-sm font-medium"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>

      <div className={sectionClass}>
        <h2 className={headingClass}>Find me</h2>
        <ul className="flex flex-col gap-2">
          {links.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="text-accent-base hover:text-accent-dark transition-colors duration-300 underline underline-offset-2"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
