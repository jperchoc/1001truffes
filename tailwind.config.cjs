/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        'brown': '#5B3D29',
        'ivory': '#FFFCEB',
        'purple': '#816E94',
        'violet': '#74226C',
        'green': '#386641',
      },
    },
  },
  plugins: [],
}