/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')], // Active DaisyUI en tant que plugin
  daisyui: {
    themes: ["light", "dark", "cupcake"], // Ajoute les thèmes que tu veux utiliser
  },
}

