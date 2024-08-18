/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        react: '#7ed6fa'
      }
    },
  },
  plugins: [require('daisyui')], 
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
}

