/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    "./src/**/*.{tsx,ts,jsx,js}",
    "./src/"

  ],
  darkMode: false,
  theme: {
    extend: {
      width:{
        '1/7' : "14.2%",
        '1/8' : "12.5%"
      },
      height:{
        '1/7' : "14.2%",
        '1/8' : "12.5%"
      }
    },
  },
  plugins: [],
}
