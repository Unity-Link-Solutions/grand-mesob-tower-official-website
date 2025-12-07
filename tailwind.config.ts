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
        gold: "#c8a882",
        amber: "#d4a574",
        "deep-green": "#2d5a3d",
        "muted-red": "#8b3a3a",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)"],
        sans: ["var(--font-geist-sans)"],
      },
    },
  },
  plugins: [],
};

export default config;

