/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '576px',
      md: '1024px',
      lg: '1500px',
    },
    colors: {
      'primary': '#333',
      'color2': 'pink',
      'secondary':'white',
      'lightgray':'#e6e5e5'
    },
    fontFamily:{
      Roboto:['Roboto','sans-serif']
    },
    extend: {},
  },
  plugins: [
    
  ],
}