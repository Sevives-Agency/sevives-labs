/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
        '10xl': '120rem',
        '11xl': '140rem',
      },
      colors: {
        'sage': {
          50: '#f6f7f6',
          100: '#e3e7e3',
          200: '#c7cfc7',
          300: '#a1afa1',
          400: '#8ebe9d',  // Boutons - vrai vert sauge doux
          500: '#5f735f',
          600: '#4a5a4a',
          700: '#3d493d',  // Titres - INCHANGÉ (gris-vert foncé sobre)
        },
        'taupe': {
          50: '#faf9f7',
          100: '#f0ede8',
          200: '#e1ddd5',
          300: '#cbc5b8',  // Fond clair
          400: '#b5ad9c',
          500: '#9a9180',
          600: '#7d7566',
        },
      },
    },
  },
  plugins: [],
}