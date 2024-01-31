import React, { useMemo, useRef } from "react";
import cx from "classnames";

import { SELECTORS_HEADER } from "~/config/domSelectors";
import { LOGO_SIZES } from "~/config/constants";
import { getRectangle } from "~/utils/getRectangle";
import useWindowSize from "./useWindowSize";

import { LogoFull } from "~/components/Logo/LogoFull";

const getTrxDelta = (a1, a2, pct) => a1 - (a1 - a2) * pct;
const getPositionDestination = () => {
  if (typeof document === "undefined") {
    return { x: 0, y: 0 };
  }
  const el = document.querySelector(`[${SELECTORS_HEADER.NAV_LOGO}]`);
  return getRectangle(el);
};
const getPositionInitial = () => {
  if (typeof window === "undefined") {
    return { x: 0, y: 0 };
  }

  return {
    x: window?.innerWidth / 2 - LOGO_SIZES.full.width / 4 || 0,
    y: window?.innerHeight / 2 - LOGO_SIZES.full.height / 4,
  };
};

function useStyles({
  pct,
  ref,
}: {
  pct: number;
  ref: React.MutableRefObject<HTMLOrSVGElement>;
}) {
  const winSize = useWindowSize();
  const destination = getPositionDestination();

  const src = useMemo(() => {
    const logoRect = getRectangle(ref.current);
    const initParams = getPositionInitial();
    const x = winSize.width / 2 - logoRect.width / 2;
    const y = winSize.height / 2 - logoRect.height / 2;

    return { x: isNaN(x) ? initParams.x : x, y: isNaN(y) ? initParams.y : y };
  }, [winSize, ref]);

  const transform = useMemo(() => {
    const dY = getTrxDelta(src.y, destination.y, pct);
    const dX = getTrxDelta(src.x, destination.x, pct);

    return `translate3d(${dX}px, ${dY}px, 0)`;
  }, [src, destination, pct]);

  return { transform };
}

// moves a logo from a designated x/y coord to a final rect
const AnimatedLogo: React.FC<{ pct: number }> = ({ pct = 0 }) => {
  const ref = useRef(null);
  const styles = useStyles({ pct, ref });

  return (
    <LogoFull
      ref={ref}
      style={styles}
      className={cx([
        pct > 0.5 && "logo--short",
        "w-logo-eb--full",
        "h-logo-eb",
        "eb-logo",
        "fixed",
      ])}
    />
  );
};

export default AnimatedLogo;
