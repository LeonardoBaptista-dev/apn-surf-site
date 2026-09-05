import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Height-based variants: laptops at 125% scaling leave ~470px of usable
      // height below the fixed bar, so sections need to shrink by height too.
      screens: {
        short: { raw: "(max-height: 800px)" },
        shorter: { raw: "(max-height: 620px)" },
      },
      colors: {
        // Petrol-tinted darks (South Atlantic water) + warm sand lights
        neutral: {
          900: '#0E2127',
          800: '#16323A',
          700: '#33474D',
          600: '#4C5F63',
          500: '#6E7E7F',
          400: '#93A09F',
          300: '#C9CFC8',
          200: '#DEDBD1',
          100: '#EFECE3',
          50: '#F8F6F1',
        },
        agua: {
          DEFAULT: '#0E8A78',
          dark: '#0B6B5D',
        },
      },
      fontFamily: {
        sans: ['var(--font-archivo)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
