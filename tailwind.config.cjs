/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [],
  purge: ["./index.html",'./src/**/*.{svelte,js,ts}'], // for unused CSS
}
