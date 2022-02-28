//const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    screens:{
      sm:{'max':'650px'},
      md:{'min':'651px'},
      lg:{'min':'1400px'}
    },
    extend: {
      fontFamily:{
        'superMercado':['Supermercado One', 'cursive'],
        'Acme': ['Acme', 'sans-serif'],
        'Amiri': ['Amiri', 'serif'],
       'Creep': ['Creepster', 'cursive'],
        'Great': ['Great Vibes', 'cursive'],
        'Hahmlet': ['Hahmlet', 'serif'],
        'web': ['Istok Web', 'sans-serif'],
        'lob': ['Lobster', 'cursive'],
        'Meri': ['Merienda', 'cursive'],
        'Marker': ['Permanent Marker', 'cursive'],
        'play': ['Play', 'sans-serif'],
        'Teko': ['Teko', 'sans-serif'],
        'Yellowtail': ['Yellowtail', 'cursive'],
      }
    },
  },
  variant: {
    extend:{},
  },
  plugins: [],
}
