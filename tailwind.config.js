/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'primary':"#653b66",
      'secondary':"#FEC7FF",
      'purple-gradient': 'linear-gradient(180deg, #F9F0FC 0%, rgba(217, 181, 226, 0) 100%)' ,
      'tertiary':"#B279B3",
      'green':"#456631",
      'green-light':"#8fb379",
      'gray': colors.gray,
      'white': colors.white,
      'black': colors.black,

      amber: colors.amber,
      emerald: colors.emerald,
    },
    fontFamily: { 
      Montserrat: ["Montserrat", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        'curso': "url('https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
			
      },
      width: ['responsive', 'hover', 'focus']
    },
  },
  plugins: [],
}