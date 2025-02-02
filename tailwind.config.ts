import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sukhumvit': ['Sukhumvit', 'sans-serif'],
      },
      colors: {
        // background: "var(--background)",
        // foreground: "var(--foreground)",
        'theme-color': '#002E6D',
        'theme-container': '#f7f7f7',
        'theme-secondary': '#002E6D'
      },
      transitionProperty: {
        'max-height': 'max-height'
      },
      keyframes: {
        'open-menu': {
          '0%': { transform: 'scaleY(0)' },
          '80%': { transform: 'scaleY(1.2)' },
          '100%': { transform: 'scaleY(1)' },
        },
      },
      animation: {
        'open-menu': 'open-menu 0.5s ease-in-out forwards',
      }
    },
  },
  plugins: [],
};
export default config;
