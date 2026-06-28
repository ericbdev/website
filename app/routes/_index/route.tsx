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
  const scrollState = useRef<"hero" | "scrolling" | "content">("hero");
  const scrollTarget = useRef<"top" | "bottom" | null>(null);
  const touchStartY = useRef<number | null>(null);

  const getHeroHeight = useCallback(() => window.innerHeight * 4, []);

  const scrollToBottom = useCallback(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    html.style.scrollBehavior = "smooth";
    html.style.overscrollBehavior = "none";
    return () => {
      html.style.scrollBehavior = "";
      html.style.overscrollBehavior = "";
    };
  }, []);

  useEffect(() => {
    scrollState.current = window.scrollY < 10 ? "hero" : "content";
  }, []);

  useEffect(() => {
    let scrollEndTimer: ReturnType<typeof setTimeout> | null = null;

    const resolveScrollEnd = () => {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      if (scrollTarget.current === "top" && window.scrollY < 10) {
        scrollState.current = "hero";
        scrollTarget.current = null;
      } else if (
        scrollTarget.current === "bottom" &&
        window.scrollY >= maxScroll - 10
      ) {
        scrollState.current = "content";
        scrollTarget.current = null;
      } else if (scrollTarget.current) {
        if (scrollTarget.current === "top") scrollToTop();
        else scrollToBottom();
        scheduleScrollEnd();
      }
    };

    const scheduleScrollEnd = () => {
      if (scrollEndTimer) clearTimeout(scrollEndTimer);
      scrollEndTimer = setTimeout(resolveScrollEnd, 150);
    };

    const handleWheel = (e: WheelEvent) => {
      if (scrollState.current === "scrolling") {
        e.preventDefault();
        return;
      }

      if (scrollState.current === "hero" && e.deltaY > 0) {
        e.preventDefault();
        scrollState.current = "scrolling";
        scrollTarget.current = "bottom";
        scrollToBottom();
        scheduleScrollEnd();
      } else if (scrollState.current === "content" && e.deltaY < 0) {
        const heroHeight = getHeroHeight();
        if (window.scrollY <= heroHeight + 100) {
          e.preventDefault();
          scrollState.current = "scrolling";
          scrollTarget.current = "top";
          scrollToTop();
          scheduleScrollEnd();
        }
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (scrollState.current === "scrolling") {
        e.preventDefault();
        return;
      }
      if (touchStartY.current === null) return;
      const deltaY = touchStartY.current - e.touches[0].clientY;

      if (scrollState.current === "hero" && deltaY > 10) {
        e.preventDefault();
        scrollState.current = "scrolling";
        scrollTarget.current = "bottom";
        scrollToBottom();
        scheduleScrollEnd();
      } else if (scrollState.current === "content" && deltaY < -10) {
        const heroHeight = getHeroHeight();
        if (window.scrollY <= heroHeight + 100) {
          e.preventDefault();
          scrollState.current = "scrolling";
          scrollTarget.current = "top";
          scrollToTop();
          scheduleScrollEnd();
        }
      }
    };

    const handleScroll = () => {
      if (scrollState.current === "scrolling") {
        scheduleScrollEnd();
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("scroll", handleScroll);
      if (scrollEndTimer) clearTimeout(scrollEndTimer);
    };
  }, [scrollToBottom, scrollToTop, getHeroHeight]);

  return (
    <div
      className={cx([
        "relative",
        "h-full",
        "overflow-[inherit]",
        "-mt-[76px]",
      ])}
    >
      <div className={cx(["h-[400vh]"])}>
        <Suspense>
          <Scroller>
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
        className={cx(["relative", "w-full", "min-h-screen"])}
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
