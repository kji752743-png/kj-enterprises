import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          white: "#FFFFFF",
          black: "#000000",
          light: "#F3F3F3",
          border: "#EAEAEA",
          muted: "#D9D9D9",
          gray: "#777777",
          dark: "#333333",
        },
      },
      fontFamily: {
        serif: ["'Playfair Display'", "Georgia", "Cambria", "serif"],
        sans: ["'Inter'", "-apple-system", "BlinkMacSystemFont", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.2em",
        ultra: "0.25em",
      },
    },
  },
  plugins: [],
};
export default config;
