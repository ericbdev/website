"use client";

import React, { useRef, useCallback } from "react";
import cx from "classnames";
import ScrollWatcher from "~/components/ScrollWatcher";
import Portal from "~/components/Portal";
import { AnimatedLogo } from "./AnimatedLogo";
import { LinkList } from "./LinkList";
import { JumpTo } from "./JumpTo";

export default function View() {
  const main = useRef(null);
  const logoRef = useRef(null);

  const scrollToBottom = useCallback(() => {
    console.log(main.current)
    main && main.current && main.current.scrollIntoView({ behavior: "smooth" });
  }, [main]);

  return (
    <div className={cx(["relative", "h-full", "overflow-[inherit]", "-mt-[76px]"])}>
      <ScrollWatcher offset={0} id={"home--scroll"} height={"400vh"}>
        {({ scrollParams: { pct } } = {}) => (
          <Portal>
            <AnimatedLogo ref={logoRef} pct={pct} />
            <JumpTo variant="info" onClick={() => scrollToBottom()} scrollPct={pct}>
              Jump to content
            </JumpTo>
            <LinkList scrollPct={pct}>
              <a href="https://github.com/ericbdev/">github</a>
              <a href="https://twitter.com/ericbdev">twitter</a>
              <a href="https://www.linkedin.com/in/eric-bright/">linkedin</a>
            </LinkList>
          </Portal>
        )}
      </ScrollWatcher>

      <div
        className={cx(["relative", "w-full", "min-h-screen"])}
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
