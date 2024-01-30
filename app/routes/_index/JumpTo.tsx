import React from "react";
import cx from "classnames";

export const JumpTo = ({
  scrollPct,
  onClick,
}: {
  scrollPct: number;
  onClick: (MouseEvent) => void;
}) => {
  const opacity = Math.max(0, 1 - scrollPct * scrollPct * 1000);
  const transform = `translate3d(-50%, ${1500 * scrollPct}px, 0)`;

  return (
    <button
      style={{
        opacity,
        transform,
      }}
      className={cx(["fixed", "block", "bottom-8", "left-1/2"])}
      onClick={onClick}
    >
      Jump to content
    </button>
  );
};
