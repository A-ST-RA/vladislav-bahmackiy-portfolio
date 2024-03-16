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
        "main-background": "#222020",
        "secondary": "#878787",
        "accent": "#DBED6D",
      },
      fontSize: {
        'h2': "48px",
        'h1': "64px",
        'h3': "40px",
        'h1-mobile': "32px"
      },

      animation: {
        fadeIn: 'fadeInUp 1s ease-in-out',
      },

      keyframes: () => ({
        fadeInUp: {
          '0%': {
            opacity: '0',
            visibility: 'hidden',
            transform: 'translateY(25%)',
          },
          '100%': {
            opacity: '1',
            visibility: 'visible',
            transform: 'translateY(0)',
          },
        },
      }),

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require("tailwindcss-animation-delay"),
  ],
};
export default config;
