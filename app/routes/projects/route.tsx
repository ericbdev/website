import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => [
  { title: "Projects | @ericbdev" },
  {
    name: "description",
    content:
      "Personal projects by Eric Bright — apps and tools built outside of work.",
  },
  { property: "og:title", content: "Projects | @ericbdev" },
  {
    property: "og:description",
    content:
      "Personal projects by Eric Bright — apps and tools built outside of work.",
  },
  { property: "og:type", content: "website" },
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:creator", content: "@ericbdev" },
];

const projects = [
  {
    name: "Brew Map",
    description:
      "A personal app for tracking and sharing craft beverage locations — breweries, bars, distilleries — on an interactive map. Built for discovering new spots, rating visits, and sharing favorites with friends.",
    tech: ["React", "TypeScript", "Convex", "Google Maps", "Clerk"],
    url: "https://thebrewmap.app/",
    github: "https://github.com/ericbdev/brew-map-app",
  },
  {
    name: "ericbdev.com",
    description:
      "This website — a minimal portfolio and resume site. Serves as a playground for trying out ideas and shipping things outside of work. My favorite part was animating the logotype — picking start and end positions, mapping their x/y coordinates, and transforming the logo between them.",
    tech: ["Remix", "React", "TypeScript", "Tailwind CSS"],
    url: "https://ericbdev.com",
    github: "https://github.com/ericbdev/website",
    showGithub: true,
  },
];

export default function Component() {
  return (
    <div className="mx-auto max-w-screen-lg px-6 py-16">
      <h1 className="leading-tight text-6xl font-bold font-display mb-12">
        Projects
      </h1>

      <p className="text-lg leading-relaxed text-gray-700 mb-14">
        Things I build outside of work — mostly to scratch my own itch, learn
        something new, or both.
      </p>

      <div className="flex flex-col gap-10">
        {projects.map((project) => (
          <div
            key={project.name}
            className="border border-gray-100 rounded-lg p-6"
          >
            <h2 className="text-2xl font-bold font-display text-accent-dark mb-3">
              {project.name}
            </h2>
            <p className="text-base leading-relaxed text-gray-600 mb-5">
              {project.description}
            </p>
            <ul className="flex flex-wrap gap-2 mb-5">
              {project.tech.map((t) => (
                <li
                  key={t}
                  className="px-3 py-1 rounded-full border border-accent-base text-accent-dark text-sm font-medium"
                >
                  {t}
                </li>
              ))}
            </ul>
            <div className="flex gap-4">
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-accent-base hover:text-accent-dark transition-colors duration-300 underline underline-offset-2 text-sm"
                >
                  Visit site
                </a>
              )}
              {"showGithub" in project && project.showGithub && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-accent-base hover:text-accent-dark transition-colors duration-300 underline underline-offset-2 text-sm"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
