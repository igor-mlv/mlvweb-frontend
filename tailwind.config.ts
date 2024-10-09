import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        varela: ['var(--font-varela-round)', 'sans-serif'],
        inter: ['var(--font-inter-tight)', 'sans-serif'],
      },
      colors: {
        violet: "var(--violet-color)",
        gray: "var(--gray-color)",
      },
    },
  },
  plugins: [],
};
export default config;
