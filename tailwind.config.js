 /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        glacial: ["Glacial Indifference", "sans-serif"],
        monospace: ["MonospaceFont", "monospace"]
      },
    },
  },
  plugins: [],
};
