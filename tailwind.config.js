/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#FF000",
      },
      fontFamily: {
        customFont: ["minerva-modern"],
        diphylleia: ["Diphylleia", "serif"],
        dongle: ["GowunDodum-Regular"],
        dongle_light: ["GowunDodum-Light"],
        dongle_semibolde: ["GowunDodum-Semibolde"],
      },
    },
  },
  plugins: [],
};
