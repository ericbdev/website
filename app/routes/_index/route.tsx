import React, { useRef, lazy, Suspense, useCallback } from "react";
import type { V2_MetaFunction } from "@remix-run/node";
import cx from "classnames";
import withMounted from "~/components/withMounted";

import AnimatedLogo from "./AnimatedLogo.client";
import { LinkList } from "./LinkList";
import { JumpTo } from "./JumpTo";

const Scroller = lazy(() => import("./Scroller"));

export const meta: V2_MetaFunction = () => [
  { title: "Home | Portfolio | @ericbdev (Eric B) " },
];

const AnimatedLogoMounted = withMounted(AnimatedLogo);

export default function Component() {
  const main = useRef(null);

  const scrollToBottom = useCallback(() => {
    main && main.current && main.current.scrollIntoView({ behavior: "smooth" });
  }, [main]);

  return (
    <div
      className={cx([
        "relative",
        "h-full",
        "overflow-[inherit]",
        "-mt-[76px]",
        "snap-y",
      ])}
    >
      <div className={cx(["h-[400vh]", "snap-start"])}>
        <Suspense>
          <Scroller scrollToBottom={scrollToBottom}>
            {({ pct }) => (
              <>
                <AnimatedLogoMounted pct={pct} />

                <JumpTo
                  variant="info"
                  onClick={() => scrollToBottom()}
                  scrollPct={pct}
                >
                  Jump to content
                </JumpTo>
                <LinkList scrollPct={pct}>
                  <a href="https://github.com/ericbdev/">github</a>
                  <a href="https://twitter.com/ericbdev">twitter</a>
                  <a href="https://www.linkedin.com/in/eric-bright/">
                    linkedin
                  </a>
                </LinkList>
              </>
            )}
          </Scroller>
        </Suspense>
      </div>
      <div
        className={cx(["relative", "w-full", "min-h-screen", "snap-center"])}
        id={"home--main"}
        ref={main}
      >
        <div
          className={cx([
            "layout--outer",
            "absolute",
            "left-1/2",
            "top-1/2",
            "-translate-x-1/2",
          ])}
        >
          Hi! I'm Eric, I like to build functional systems and bringing ideas to
          life. This is really more a play ground for me than anything. I like
          to practice, and sometimes get my own ideas to life.
        </div>
      </div>
    </div>
  );
}
