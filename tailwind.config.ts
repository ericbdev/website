import type { Config } from "tailwindcss";
const LOGO_SIZES = {
  short: {
    width: 212,
    height: 120,
  },
  full: {
    width: 370,
    height: 120,
  },
};

const config = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        "logo-eb": LOGO_SIZES.full.height / 2,
      },
      width: {
        "logo-eb--full": LOGO_SIZES.full.width / 2,
        "logo-eb--short": LOGO_SIZES.short.width / 2,
      },
      zIndex: {
        root: 100,
        masthead: 1000,
        main: 500,
      },
      fontFamily: {
        display: ["Roboto", "system-ui", "sans-serif"],
      },
    },
    fontFamily: {
      sans: ["Open Sans", "system-ui", "sans-serif"],
    },
  },
  plugins: [],
} as Config;

export default config;
