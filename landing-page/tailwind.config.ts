import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f3f7ff",
          100: "#e2ebff",
          200: "#c0d3ff",
          300: "#91b1ff",
          400: "#628eff",
          500: "#3b6bff",
          600: "#274fe0",
          700: "#1d3cb3",
          800: "#182f8a",
          900: "#162a6d"
        }
      }
    }
  },
  plugins: [],
};

export default config;


