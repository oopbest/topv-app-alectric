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
        'theme-color': '#012143',
      },
      transitionProperty: {
        'max-height': 'max-height'
      },
    },
  },
  plugins: [],
};
export default config;
