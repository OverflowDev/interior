const defaultTheme = require("tailwindcss/defaultTheme");
// const plugin = require('tailwindcss/plugin')

module.exports = {

  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {

      colors: {
        primary: '#003A46',
        secondary: {
          100: '#F99137',
          200: '#7BEAAC',
          300: '#7F2C00',
        },
        tertiary: {
            100: '#FFE9CF',
            200: '#C1FAFF',
        }
    },

    fontFamily: {
      sans: ["Raleway", ...defaultTheme.fontFamily.sans],
    },

    },
  },

  plugins: [
    require('tailwind-scrollbar-hide'),
    require("daisyui")
  ],
}