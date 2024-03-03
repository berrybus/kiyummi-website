/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'selector',
  theme: {
    container: {
      center: true,
    },
    extend: {},
  },
    future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [
    require("@fortawesome/fontawesome-free"),
    require("@tailwindcss/typography"),
    require("daisyui"),
  ],
  daisyui: {
    themes: ["cupcake", "dracula", "light", "dark"],
    lightTheme: "cupcake",
    darkTheme: "dracula",
  },
};
