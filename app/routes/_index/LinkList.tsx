import React from "react";
import cx from "classnames";
import { LOGO_SIZES } from "~/config/constants";

export const LinkList: React.FC<{ scrollPct: number }> = ({
  scrollPct,
  children,
}) => {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  const opacity = Math.max(0, 1 - scrollPct * scrollPct * 10);
  const transX = `calc(-50% - ${1500 * scrollPct}px)`;
  const transY = `calc(${LOGO_SIZES.full.height / 2 + 20}px)`;
  const transform = `translate3d(${transX}, ${transY}, 0)`;

  const style = mounted
    ? {
        display: scrollPct >= 1 ? "none" : "",
        opacity,
        transform,
      }
    : {};

  return (
    <div
      style={style}
      className={cx(["fixed", "flex", "bottom-1/2", "left-1/2", "gap-4"])}
    >
      {children}
    </div>
  );
};
