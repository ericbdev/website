"use client";

import React from "react";

import ScrollWatcher from "~/components/ScrollWatcher";
import Portal from "~/components/Portal";

const Scroller: React.FC<{
  children: ({ pct: number }) => JSX.Element;
}> = ({ children }) => {
  return (
    <ScrollWatcher offset={0} id={"home--scroll"} height={"400vh"}>
      {({ scrollParams: { pct } } = {}) => <Portal>{children({ pct })}</Portal>}
    </ScrollWatcher>
  );
};

export default Scroller;
