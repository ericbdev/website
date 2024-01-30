"use client";
// https://blog.logrocket.com/learn-react-portals-by-example/
// maybnes: https://medium.com/@jc_perez_ch/dynamic-react-portals-with-hooks-ddeb127fa516

import ReactDOM from "react-dom";
import { useMemo } from "react";

import { SELECTORS_MAIN } from "~/config/domSelectors";

const Portal: React.FC<{ root?: string }> = ({ children, root }) => {
  const portalRoot = useMemo(() => {
    if (typeof document === "undefined") {
      return null;
    }
    const selector = root || SELECTORS_MAIN.SITE_PORTAL;
    return document.getElementById(selector);
  }, [root]);

  return useMemo(() => {
    if (portalRoot) {
      return ReactDOM.createPortal(children, portalRoot);
    } else {
      return children;
    }
  }, [portalRoot, children]);
};

export default Portal;
