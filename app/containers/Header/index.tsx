import cx from "classnames";
import { NavLink } from "@remix-run/react";

import { SELECTORS_HEADER } from "~/config/domSelectors";
import { LogoShort } from "~/components/Logo/LogoShort";

const wrapperClassNames = cx([
  "sticky",
  "top-0",
  "right-0",
  "bottom-0",
  "left-0",
  "w-full",
  "bg-white",
  "z-masthead",
]);

const innerClassNames = cx([
  "layout--outer",
  "flex",
  "flex-row",
  // "items-end",
]);

const listClassNames = cx([
  "flex",
  "flex-row",
  "items-end",
  "justify-end ",
  "ml-auto",
  "gap-2",
]);

export function Header() {
  return (
    <div className={wrapperClassNames}>
      <nav className={cx(innerClassNames)}>
        <LogoShort
          dataAttrs={{ [SELECTORS_HEADER.NAV_LOGO]: "" }}
          className={cx(["h-logo-eb", "w-logo-eb--short"])}
        />
        <ul className={listClassNames}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
