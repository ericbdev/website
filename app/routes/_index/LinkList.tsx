import React from "react";
import cx from "classnames";
import { LOGO_SIZES } from "~/config/constants";

export const LinkList: React.FC<{ scrollPct: number }> = ({
  scrollPct,
  children,
}) => {
  const opacity = Math.max(0, 1 - scrollPct * scrollPct * 10);
  const transX = `calc(-50% - ${1500 * scrollPct}px)`;
  const transY = `calc(${LOGO_SIZES.full.height / 2 + 20}px)`;
  const transform = `translate3d(${transX}, ${transY}, 0)`;

  return (
    <div
      style={{
        display: scrollPct >= 1 ? "none" : "",
        opacity,
        transform,
      }}
      className={cx(["fixed", "flex", "bottom-1/2", "left-1/2", "gap-4"])}
    >
      {children}
    </div>
  );
};
