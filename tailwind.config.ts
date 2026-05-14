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
        neutral: {
          900: '#171717',
          800: '#262626',
          700: '#404040',
          500: '#737373',
          300: '#d4d4d4',
          100: '#f5f5f5',
          50: '#fafafa',
        }
      }
    },
  },
  plugins: [],
};
export default config;