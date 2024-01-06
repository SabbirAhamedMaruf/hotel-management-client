/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Settings for dark mode
  theme: {
    extend: {
      fontFamily: {
        Edu: "Cormorant Infant, serif",
        Jost: "Josefin Sans, sans-serif",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [false],
  },
};
