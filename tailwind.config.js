/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1rem",
          lg: "1rem",
          xl: "2rem",
          "2xl": "4rem",
        },
      },
      colors: {
        primary: "#384DDA",
        secondary: "#242E4F",
        "accent-dark": "#5B5D72",
        accent: "#EBECFF",
        light: "#F4F4F4",
        dark: "#181C29",
      },
      textColor: {
        main: "#1B1B1F",
        normal: "#5B5D72",
      },
      fontFamily: {
        sora: ["Sora", "sans-serif"],
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen sm": {
            maxWidth: "640px",
          },
          "@screen md": {
            maxWidth: "768px",
          },
          "@screen lg": {
            maxWidth: "992px",
          },
          "@screen xl": {
            maxWidth: "1200px",
          },
        },
      });
    },
  ],
};
