import { Link } from "@remix-run/react";
import cx from "classnames";

export default function NotFound() {
  return (
    <div
      className={cx([
        "mx-auto",
        "max-w-screen-lg",
        "px-6",
        "py-24",
        "flex",
        "flex-col",
        "items-start",
        "gap-6",
      ])}
    >
      <p className="text-sm font-medium text-accent-base uppercase tracking-widest">
        404
      </p>
      <h1 className="text-5xl font-bold font-display">Page not found</h1>
      <p className="text-gray-500 text-lg">
        That page doesn't exist. Head back home?
      </p>
      <Link
        to="/"
        className="text-accent-base hover:text-accent-dark underline underline-offset-2 transition-colors duration-300"
      >
        &larr; Back to home
      </Link>
    </div>
  );
}
