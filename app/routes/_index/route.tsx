import React, { useRef, useEffect, lazy, Suspense, useCallback } from "react";
import type { V2_MetaFunction } from "@remix-run/node";
import cx from "classnames";
import { GitHub, Twitter, Linkedin } from "react-feather";

import withMounted from "~/components/withMounted";

import AnimatedLogo from "./AnimatedLogo.client";
import { LinkList } from "./LinkList";
import { JumpTo } from "./JumpTo";

const Scroller = lazy(() => import("./Scroller"));
const AnimatedLogoMounted = withMounted(AnimatedLogo);

const iconLinkClassnames = cx([
  "text-accent-base",
  "hover:text-accent-dark",
  "transition-colors",
  "duration-300",
]);

export const meta: V2_MetaFunction = () => [
  { title: "@ericbdev — Eric Bright" },
  {
    name: "description",
    content:
      "Eric Bright — software developer who builds functional systems and brings ideas to life.",
  },
  { property: "og:title", content: "@ericbdev — Eric Bright" },
  {
    property: "og:description",
    content:
      "Eric Bright — software developer who builds functional systems and brings ideas to life.",
  },
  { property: "og:type", content: "website" },
  { property: "og:image", content: "/og-image.png" },
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:site", content: "@ericbdev" },
  { name: "twitter:creator", content: "@ericbdev" },
];

export default function Component() {
  const main = useRef(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const hasTriggered = useRef(false);
  const touchStartY = useRef<number | null>(null);

  const scrollToBottom = useCallback(() => {
    main && main.current && main.current.scrollIntoView({ behavior: "smooth" });
  }, [main]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const triggerScroll = () => {
      if (hasTriggered.current) return;
      hasTriggered.current = true;
      scrollToBottom();
    };

    const handleWheel = (e: WheelEvent) => {
      if (hasTriggered.current) return;
      if (e.deltaY > 0) triggerScroll();
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (hasTriggered.current || touchStartY.current === null) return;
      const deltaY = touchStartY.current - e.touches[0].clientY;
      if (deltaY > 10) triggerScroll();
    };

    const handleScroll = () => {
      if (container.scrollTop === 0) {
        hasTriggered.current = false;
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: true });
    container.addEventListener("touchstart", handleTouchStart, { passive: true });
    container.addEventListener("touchmove", handleTouchMove, { passive: true });
    container.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
      container.removeEventListener("scroll", handleScroll);
    };
  }, [scrollToBottom]);

  return (
    <div
      ref={containerRef}
      className={cx([
        "relative",
        "h-full",
        "overflow-[inherit]",
        "-mt-[76px]",
        "snap-y",
        "snap-mandatory",
        "scroll-smooth",
      ])}
    >
      <div className={cx(["h-[400vh]", "snap-start"])}>
        <Suspense>
          <Scroller scrollToBottom={scrollToBottom}>
            {({ pct }) => (
              <>
                <AnimatedLogoMounted pct={pct} />

                <LinkList scrollPct={pct}>
                  <a
                    href="https://github.com/ericbdev/"
                    target="_blank"
                    rel="noreferrer"
                    className={iconLinkClassnames}
                  >
                    <GitHub color="currentColor" size={28} />
                  </a>
                  <a
                    href="https://twitter.com/ericbdev"
                    target="_blank"
                    rel="noreferrer"
                    className={iconLinkClassnames}
                  >
                    <Twitter color="currentColor" size={28} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/eric-bright/"
                    target="_blank"
                    rel="noreferrer"
                    className={iconLinkClassnames}
                  >
                    <Linkedin color="currentColor" size={28} />
                  </a>
                </LinkList>

                <JumpTo onClick={() => scrollToBottom()} scrollPct={pct}>
                  Jump to content
                </JumpTo>
              </>
            )}
          </Scroller>
        </Suspense>
      </div>
      <div
        className={cx(["relative", "w-full", "min-h-screen", "snap-start"])}
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
          Hi! I'm Eric. I like to build functional systems and bring ideas to
          life. This is more of a playground for me than anything — I like to
          practice and sometimes ship my own ideas.
        </div>
      </div>
    </div>
  );
}
