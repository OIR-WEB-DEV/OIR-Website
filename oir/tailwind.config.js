/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      fontFamily:{
        Montserrat:['Montserrat','sans-serif'],
        Fredericka:['Fredericka the Great', 'cursive']
      },
      colors:{
        oirBrown:'#52091B',
        oirOrange:'#FE6C19',
        oirLightOrange:'#FAE9D1',
        oirYellow:'#FEB338',
        oirPurple:'#814DBC',
        oirGray:'#9E9E9E'
      }
    },
  },
  plugins: [],
}