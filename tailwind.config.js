/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue"
  ],
  plugins: [require("daisyui")],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        'text': '#211b08',
        'bkg': '#fcfcfc',
        'primary': '#253858',
        'secondary': '#aeb446',
        'accent': '#E0013F',
       },
    },
    container: {
      center: true,
    },
    fontFamily: {},
  },
  daisyui: {
    themes: ["light"],
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "di", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
  },
};
