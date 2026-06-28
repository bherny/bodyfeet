import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          sky: "#99D6E9",
          blue: "#5E92DB",
          rose: "#F4B8CC",
          lilac: "#CAA2DE",
          deep: "#315470",
          ink: "#17324A",
          mist: "#F4FBFC",
        },
      },
      boxShadow: {
        soft: "0 24px 80px rgba(49, 84, 112, 0.14)",
        lift: "0 18px 45px rgba(49, 84, 112, 0.18)",
      },
      fontFamily: {
        sans: ["var(--font-lato)", "Lato", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Lato", "Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
