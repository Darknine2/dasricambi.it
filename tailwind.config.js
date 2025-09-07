/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        // Aggiungi qui il tuo colore personalizzato
        'accent-green': '#a6ce39',
      },
    },
  },
  plugins: [],
}