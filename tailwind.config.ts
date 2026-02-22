import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#b68a3a",
          light: "#c9a04d",
          dark: "#9a732f",
        },
        espresso: {
          DEFAULT: "#3a2a1f",
          light: "#4d3829",
          dark: "#2a1e16",
        },
        cream: "#faf8f5",
        offwhite: "#f5f2ed",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "2xl": "1rem",
      },
      boxShadow: {
        soft: "0 4px 20px rgba(58, 42, 31, 0.08)",
        lift: "0 12px 40px rgba(58, 42, 31, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
