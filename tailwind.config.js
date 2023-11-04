/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode:"class", // Settings for dark mode 
  theme: {
    extend: {
      fontFamily: {
        Edu: "Edu TAS Beginner, cursive",
        Jost: "Jost, sans-serif",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [false],
  },
};
