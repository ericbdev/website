import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => [
  { title: "About | Portfolio | @ericbdev (Eric B) " },
];

export default function Component() {
  return (
    <div className="mx-auto max-w-screen-lg">
      <h1 className="leading-1 text-6xl font-bold">About</h1>
    </div>
  );
}
