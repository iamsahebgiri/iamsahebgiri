import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Geist Sans", ...defaultTheme.fontFamily.sans],
        mono: ["Geist Mono", ...defaultTheme.fontFamily.mono],
        serif: ["Instrument Serif", ...defaultTheme.fontFamily.serif],
      },
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
        "background-shine": "background-shine 2s linear infinite",
        float: "float 5s ease infinite",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        "background-shine": {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translate(0) scale(1)",
          },
          "50%": {
            transform: "translateY(8px) scale(.99)",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
