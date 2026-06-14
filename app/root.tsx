import type { LinksFunction, V2_MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import cx from "classnames";

import "fontsource-roboto/400.css";
import "fontsource-roboto/700.css";
import "fontsource-open-sans/400.css";
import "fontsource-open-sans/700.css";

import { Header } from "~/containers/Header";
import { Footer } from "~/components/Footer";
import { SELECTORS_MAIN } from "~/config/domSelectors";
import stylesheet from "./tailwind.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export const meta: V2_MetaFunction = () => [
  { property: "og:image", content: "/og-image.png" },
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:site", content: "@ericbdev" },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div
          id={SELECTORS_MAIN.ROOT}
          className={cx(["relative", "flex", "flex-col", "min-h-screen", "w-full", "z-10"])}
        >
          <div
            id={SELECTORS_MAIN.SITE_ROOT}
            className={cx(["relative", "z-10", "flex", "flex-col", "flex-1"])}
          >
            <Header />

            <Outlet />
            <ScrollRestoration />
          </div>
          <Footer />
        </div>
        <div
          id={SELECTORS_MAIN.SITE_PORTAL}
          className={cx(["absolute", "top-0", "left-0", "z-20"])}
        />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
