/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        dark: "#334155",
        // Using modern hsl 'convert' color
        primary: "#77bef8",
        primaryAlt: "#64b5f7",
      },
    },
  },
  plugins: [],
};
