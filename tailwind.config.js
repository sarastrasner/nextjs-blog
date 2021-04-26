const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily:{
        sans: ["Quicksand", ...defaultTheme.fontFamily.sans]
      },
      colors: {
        navy: '#132B3D',
        green: '#36614D',
        beige: '#D9C4B8',
        lightPink: '#D97373',
        darkPink: '#B02C4B'
      },
    },
  },
  variants: {
    typography: ['dark'],
  },
  plugins: [],
};
