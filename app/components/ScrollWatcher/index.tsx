// https://www.smashingmagazine.com/2016/12/gpu-animation-doing-it-right/
// https://whoisryosuke.com/blog/2020/handling-scroll-based-animations-in-react/
// https://codesandbox.io/s/sticky-sandbox-j5fr3?file=/src/index.js:437-443
// https://dev.to/n8tb1t/tracking-scroll-position-with-react-hooks-3bbj

import React, { useEffect, useState, useRef } from "react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import cx from "classnames";

import { getRectangle } from "~/utils/getRectangle";

const getScrollPercentage = (y, height, offset = 0) =>
  Math.min(1, (y + offset) / height);

// raster based sizings
const initParams = {
  pct: 0,
};

type Position = { y: number; x: number };
type ScrollProps = {
  prevPos: Position;
  currPos: Position;
};

// IScrollProps from @n8tb1t/use-scroll-position
const initPos: ScrollProps = {
  prevPos: { y: 0, x: 0 },
  currPos: { y: 0, x: 0 },
};

type Props = {
  children: ({
    scrollParams,
  }: {
    scrollParams: { pct: number };
  }) => JSX.Element;
  offset?: number;
  height?: string;
  id: string;
};

const ScrollWatcher: React.FC<Props> = ({ children, height, id, offset }) => {
  const [scrollParams, setParams] = useState<{ pct: number }>(initParams);
  const ref = useRef(null);
  const boundsRect = getRectangle(ref.current);

  // scroll monitoring
  useScrollPosition(
    ({ currPos = initPos }) => {
      const { y } = currPos;
      const boundsHeight = boundsRect?.height || 0;
      const pct = getScrollPercentage(y, boundsHeight, offset) || 0;

      return setParams({ pct });
    },
    [boundsRect, ref],
    ref,
    true,
    null
  );

  return (
    <div
      className={cx(["relative", "w-full", "min-h-screen"])}
      ref={ref}
      id={id}
      style={{ minHeight: height }}
    >
      {children({ scrollParams })}
    </div>
  );
};

export default ScrollWatcher;
