import type { V2_MetaFunction } from "@remix-run/node";
import cx from "classnames";

export const meta: V2_MetaFunction = () => [
  { title: "About | @ericbdev" },
  {
    name: "description",
    content:
      "Eric Bright — full stack developer with a passion for user experience and building tools people actually use.",
  },
  { property: "og:title", content: "About | @ericbdev" },
  {
    property: "og:description",
    content:
      "Eric Bright — full stack developer with a passion for user experience and building tools people actually use.",
  },
  { property: "og:type", content: "profile" },
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:creator", content: "@ericbdev" },
];

const skills = {
  Languages: ["TypeScript", "Python", "Node.js", "GraphQL", "CSS", "HTML"],
  Frameworks: [
    "React",
    "Remix",
    "Redux / RTK",
    "Tailwind CSS",
    "Apollo",
    "Styled Components",
    "Pydantic",
    "Pytest",
  ],
  Tools: ["AWS", "Docker", "Terraform", "Nx", "Webpack", "Figma", "OpenAI"],
};

const experience = [
  {
    company: "Siteimprove",
    period: "2019 – Present",
    roles: [
      {
        title: "Principal Software Engineer — MarketMuse",
        period: "2024 – Present",
        bullets: [
          "Enabled a team of 7 engineers to stand up and deploy a secure, observable Lambda-based API — cutting delivery time from weeks to a day.",
          "Remediated security posture of distributed AWS services to meet enterprise requirements, applying least-privilege principals and network isolation.",
          "Reduced monthly authorization costs by nearly $10k USD.",
        ],
      },
      {
        title: "Lead Frontend Developer — MarketMuse",
        period: "2021 – 2024",
        bullets: [
          "Migrated a monolithic React SPA into Nx and progressively abstracted features into a shared component system, improving stability and quality.",
          "Built a GenAI writing assistant using proprietary SEO data and OpenAI to aid content creators.",
          "Unified three separate products into one cohesive experience, leading two direct reports through the effort.",
        ],
      },
      {
        title: "Senior JavaScript Developer — MarketMuse",
        period: "2019 – 2021",
        bullets: [
          "Migrated 50k users off custom auth systems, eliminating account-sharing abuse.",
          "Created a Webpack templating system for painless transactional email updates.",
          "Led a team of Python engineers to rebuild a BFFE platform from Node.js, improving reliability and stability.",
        ],
      },
    ],
  },
  {
    company: "Freelance",
    period: "2018 – 2019",
    roles: [
      {
        title: "Independent Contractor",
        period: "",
        bullets: [
          "Built a bespoke Shopify Plus theme for Lammles.",
          "Developed a React-based checkout for BigCommerce on the One Page Checkout framework.",
        ],
      },
    ],
  },
  {
    company: "Pixel Union",
    period: "2015 – 2018",
    roles: [
      {
        title: "Developer",
        period: "",
        bullets: [
          "Built an in-house automation tool to build and ship Shopify themes.",
          "Developed a library to convert prices across currencies using Shopify rates.",
          "Built and maintained themes generating hundreds of thousands of dollars in sales.",
        ],
      },
    ],
  },
  {
    company: "Design Shopp",
    period: "2012 – 2015",
    roles: [
      {
        title: "Developer",
        period: "",
        bullets: [
          "Built custom WordPress themes as CMS solutions for businesses.",
          "Developed cross-device native applications using Cordova with custom REST endpoints.",
        ],
      },
    ],
  },
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

      {/* Bio */}
      <div className="mb-14">
        <p className="text-lg leading-relaxed text-gray-700 mb-4">
          At my heart I'm a full stack developer. My passion is user experience
          — creating tools that people actually want to use, whether that's a
          graphical interface, a command line application, or a suite of APIs.
        </p>
        <p className="text-base leading-relaxed text-gray-600 mb-4">
          My roots are in frontend development, but I've built up real depth in
          backend and infrastructure over the years. That range lets me
          understand the full end-to-end cycle regardless of where the work
          lives in the stack.
        </p>
        <p className="text-base leading-relaxed text-gray-600">
          TypeScript is my primary language — that's where my strength is.
          Python is my second, and I reach for it often. Right now I'm a
          Principal Software Engineer at{" "}
          <span className="text-accent-dark font-medium">
            MarketMuse (Siteimprove)
          </span>
          , and this site is my own corner of the internet to build and ship
          ideas outside of work.
        </p>
      </div>

      {/* Skills */}
      <div className="mb-14">
        <h2 className="text-2xl font-bold font-display mb-6 text-accent-dark">
          Skills
        </h2>
        <div className="flex flex-col gap-4">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="flex flex-col sm:flex-row sm:items-start gap-2">
              <span className="text-sm font-medium text-gray-400 w-28 shrink-0 pt-1">
                {category}
              </span>
              <ul className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <li
                    key={skill}
                    className="px-3 py-1 rounded-full border border-accent-base text-accent-dark text-sm font-medium"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div className="mb-14">
        <h2 className="text-2xl font-bold font-display mb-8 text-accent-dark">
          Experience
        </h2>
        <div className="flex flex-col gap-10">
          {experience.map(({ company, period, roles }) => (
            <div key={company}>
              <div className="flex items-baseline justify-between mb-4">
                <h3 className="text-xl font-bold font-display">{company}</h3>
                <span className="text-sm text-gray-400">{period}</span>
              </div>
              <div className="flex flex-col gap-6 pl-4 border-l border-gray-100">
                {roles.map((role) => (
                  <div key={role.title}>
                    <div className="flex items-baseline justify-between mb-2">
                      <p className="font-medium text-gray-800">{role.title}</p>
                      {role.period && (
                        <span className="text-sm text-gray-400">
                          {role.period}
                        </span>
                      )}
                    </div>
                    <ul className="flex flex-col gap-2">
                      {role.bullets.map((bullet, i) => (
                        <li
                          key={i}
                          className="text-sm text-gray-600 leading-relaxed pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-accent-base"
                        >
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="mb-14">
        <h2 className="text-2xl font-bold font-display mb-4 text-accent-dark">
          Education
        </h2>
        <p className="text-gray-700">
          DEC in Publication Design &amp; Hypermedia Technology
        </p>
        <p className="text-sm text-gray-400">John Abbott College, 2009</p>
      </div>

      {/* Find me */}
      <div>
        <h2 className="text-2xl font-bold font-display mb-4 text-accent-dark">
          Find me
        </h2>
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
