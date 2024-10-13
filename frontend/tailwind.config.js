/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/react-tailwindcss-select/dist/index.esm.js',
  ],
  theme: {
    extend: {
      colors: {
        black: '#1D343A',
        pureWhite: '#FFFFFF',
        grey: '#CCCCCC',
        lightGreen:'#f7f8f6',//
        green: '#3C8474',
        red: '#c55744',
        lightRed: '#ea917c',
        beige:'#f8f1eb',
        mustard: '#e5bb66',
        roseBeige: '#faf5f5'//
      },
      fontFamily: {
        spartan: ['League Spartan', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        alex: ['Alex Brush', 'cursive']
      },
    },
  },
  plugins: [],
};
