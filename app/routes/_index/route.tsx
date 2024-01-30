import { lazy, Suspense } from "react";
import type { V2_MetaFunction } from "@remix-run/node";

const View = lazy(() => import("./View"));

export const meta: V2_MetaFunction = () => [
  { title: "Home | Portfolio | @ericbdev (Eric B) " },
];

export default function Component() {
  return (
    <Suspense>
      <View />
    </Suspense>
  );
}
