/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1600px'
      },
      container: {
        center: true,
        // maxWidth: {
        //   DEFAULT: "100%",
        //   sm: "640px",
        //   md: "768px",
        //   lg: "1024px",
        //   xl: "1280px",
        //   "2xl": "1280px",
        // },
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          md: "3rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "7rem",
        },
      },
      colors: {
        "c-black-1": "#020103",
        "c-black-2": "#151515",
        "c-purple-1": "#854CFF",
        "c-purple-2": "#9795FF",
        "c-purple-3": "#BE9FFF",
        "c-blue-1": "#504CFF",
      },
      fontSize: {
        "super-xs": "0.815rem",
        "super-sm": "0.925rem",
        "super-base": "1.07rem",
        "1.5xl": "1.38rem",
        "2.5xl": "1.65rem",
        "3.5xl": "2.05rem",
        "4.5xl": "2.65rem",
      },
      borderRadius: {
        "2.5xl": "1.25rem"
      },
      padding: {
        13: "3.25rem",
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 65s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
      },
      transitionTimingFunction: {
        "custom-line": "cubic-bezier(.54,.23,.64,.98)"
      },
      transitionDuration: {
        '850': '850ms'
      }
    },
  },
  plugins: [],
};
