/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    //TODO: configurar aqui as cores da empresa
    
    extend: {
      colors: {
        'blue': '#005ca9',
        'white': '#ffffff',
        'orange': '#f39200',
        'dark-orange': "#d87b00",
        'red': '#b22c2c',
        'black': "#404b52",
        'gray': "#ebf1f2"
      },
    },
  },
  plugins: [],
}