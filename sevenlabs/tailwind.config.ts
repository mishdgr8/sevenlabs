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
        primary: "#000000",
        secondary: "#ffffff",
        neutral: {
          100: "#fcfcfc",
          200: "#eeeeee",
          300: "#d1d1d1",
          400: "#a1a1a1",
          500: "#717171",
        },
      },
      letterSpacing: {
        "tight-premium": "-.075em",
        "widest-premium": ".4em",
      },
      lineHeight: {
        "extra-tight": "0.85",
      },
      animation: {
        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      fontSize: {
        "huge": ['min(15vw, 15rem)', { lineHeight: '0.8', letterSpacing: '-0.05em' }],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;

