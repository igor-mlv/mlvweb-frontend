import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      maxWidth: {
        'global-container': '80rem',
      },
      minWidth: {
        'global-container': '23.75rem',
      },
      fontFamily: {
        varela: ['var(--font-varela-round)', 'sans-serif'],
        inter: ['var(--font-inter-tight)', 'sans-serif'],
      },
      colors: {
        background: "var(--background-color)",
        violet: "var(--violet-color)",
        gray: "var(--gray-color)",
      },
    },
  },
  plugins: [],
};
export default config;
