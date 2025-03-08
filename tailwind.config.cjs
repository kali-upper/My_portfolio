/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#0a192f",
        secondary: "#aaa6c3",
        tertiary: "#112240",
        "black-100": "#0a1930",
        "black-200": "#051630",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
        "gradient-primary": "linear-gradient(to right, #0a192f, #112240)",
        "gradient-radial": "radial-gradient(circle at center, #112240, #0a192f)",
      },
    },
  },
  plugins: [],
};
