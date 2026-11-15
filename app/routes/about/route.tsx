import type { V2_MetaFunction } from "@remix-run/node";
import cx from "classnames";

export const meta: V2_MetaFunction = () => [
  { title: "About | @ericbdev" },
  {
    name: "description",
    content:
      "Eric Bright — principal engineer working across web platforms, AWS and applied NLP, with a passion for building tools people actually use.",
  },
  { property: "og:title", content: "About | @ericbdev" },
  {
    property: "og:description",
    content:
      "Eric Bright — principal engineer working across web platforms, AWS and applied NLP, with a passion for building tools people actually use.",
  },
  { property: "og:type", content: "profile" },
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:creator", content: "@ericbdev" },
];

const skills = {
  Languages: ["TypeScript", "Python", "Node.js", "GraphQL", "CSS", "HTML"],
  "Web Platform": [
    "React",
    "Remix (SSR)",
    "Next.js",
    "Redux / RTK",
    "Nx",
    "Turborepo",
    "Design Systems",
    "Storybook",
    "WCAG Accessibility",
    "Tailwind CSS",
    "Apollo",
    "Webpack",
    "Vite",
  ],
  "NLP & AI": [
    "spaCy",
    "TF-IDF / NMF",
    "Embeddings & Similarity",
    "LLM-as-Judge Evaluation",
    "OpenAI",
    "AWS Bedrock",
  ],
  Cloud: [
    "AWS Lambda",
    "API Gateway",
    "DynamoDB",
    "CloudFront / WAF",
    "KMS",
    "Kubernetes",
    "Docker",
    "Terraform",
  ],
  "Quality & Ops": [
    "OpenTelemetry",
    "X-Ray",
    "Datadog",
    "Jest",
    "Cypress",
    "Pytest",
    "Pydantic",
    "Architecture Decision Records",
  ],
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
          "Built a paved-path API template, adopted by five Python services, so a team of 7 engineers could stand up a secure, observable Lambda-based API in a day instead of weeks. Fixes made upstream were backported to every service that used it.",
          "Wrote design proposals and architecture decision records to align teams on configuration, data-model and service-boundary changes before building them.",
          "Brought the security of distributed AWS services up to enterprise requirements: least-privilege IAM and KMS, encrypted logs, network isolation, and a CloudFront WAF.",
          "Defined a measurement framework for AI adoption and built the dashboard leadership tracks it with. It collects daily per-user usage from several AI tools and scores adoption weekly, monthly and quarterly. Users in more than one org are now counted once.",
          "Moved an AI writing API onto the company Kubernetes platform, with synced secrets, liveness and readiness probes, Datadog tracing, a local kind cluster, and stage-to-production promotion.",
          "Delivered a third-party AI search-visibility integration in the core product's large shared codebase, from KMS-encrypted secrets and Terraform CI/CD to a second production region for US customers.",
          "Upgraded the product's frontend to React 18 and sped up its test suite by switching Jest to SWC.",
          "Moved a Chrome extension into a Turborepo monorepo, then added CI, smoke tests and regression coverage for document flows.",
          "Built a customer-provisioning CLI on the product's GraphQL API, with dry runs, JSON reports and feature-flag targeting.",
          "Wrote shared AI engineering standards (agents, skills and guardrails) that ship to other teams as a versioned plugin.",
          "Reduced monthly authorization costs by nearly $10k USD.",
        ],
      },
      {
        title: "Lead Frontend Developer — MarketMuse",
        period: "2021 – 2024",
        bullets: [
          "Set up the product's Nx and Next.js monorepo and moved a monolithic React SPA into it feature by feature. Kept it current through major Nx upgrades, with CI that builds, tests and deploys only the apps a change affects.",
          "Built the shared component library in Storybook (layout, buttons, tables, navigation, badges), plus shared packages for styles, i18n and access control.",
          "Made the app faster to load and render: split out heavy features and the rich-text editor into their own chunks, lazy-loaded third-party scripts and styles, and memoized expensive table and heatmap rendering.",
          "Contributed to an open-source rich-text editor library built on Slate, then sped up string matching and highlighting in the product's editor.",
          "Migrated the product's data tables to react-table v8, and set up Cypress end-to-end tests against a Dockerized build.",
          "Added login and MFA alerting with geo-IP context to catch suspicious account activity.",
          "Built a GenAI writing assistant using proprietary SEO data and OpenAI to aid content creators.",
          "Unified three separate products into one cohesive experience, leading two direct reports through the effort.",
          "Made over 6,000 commits to the product monorepo between 2021 and 2025.",
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
          "Built a custom Shopify Plus theme for a retail client.",
          "Built a React checkout for BigCommerce stores.",
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
          "Contributed to the shared core library behind BigCommerce themes.",
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
          I've been building for the web for over 14 years. At my heart I'm a
          full stack developer, and my passion is user experience
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
