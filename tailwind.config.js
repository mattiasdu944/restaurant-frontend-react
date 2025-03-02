// tailwind.config.js
const { heroui } = require("@heroui/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/components/(button|card|image|input|modal|pagination|table|toast|ripple|spinner|form|checkbox|spacer).js"
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [heroui({
    themes: {
      light: {
        colors: {
          background: '#fbfbfa',
          primary: {
            DEFAULT: '#ed7904',
            '50': '#fff8eb',
            '100': '#ffedc6',
            '200': '#ffd987',
            '300': '#ffbe49',
            '400': '#ffa51f',
            '500': '#ed7904',
            '600': '#de5b01',
            '700': '#b83b05',
            '800': '#952e0b',
            '900': '#7b260c',
            '950': '#471101',
          },
        }
      },
      dark: {
        colors: {
          background: '#000',
          primary: {
            DEFAULT: '#ed7904',
            '50': '#fff8eb',
            '100': '#ffedc6',
            '200': '#ffd987',
            '300': '#ffbe49',
            '400': '#ffa51f',
            '500': '#ed7904',
            '600': '#de5b01',
            '700': '#b83b05',
            '800': '#952e0b',
            '900': '#7b260c',
            '950': '#471101',
          },
        }
      }
    }
  })]
};