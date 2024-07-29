import type { Config } from 'tailwindcss'
import plugin from "tailwindcss";
import theme = require("tailwindcss/defaultTheme");
import typographyPlugin from './src/utils/typography'

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '320px',
      '2sm': '576px',
      md: '768px',
      lg: '990px',
      xl: '1260px',
      '2xl': '1400px',
      '3xl': '1600px',
    },
    extend: {
      colors: {
        primary: '#212529',
        secondary: '#292D32',
        gold: {
          dark: '#E2C299',
          light: '#C5A67C',
        },
        red: '#E86068'
      },
      spacing: {
        '3.7': '15px',
        '6.5': '25px',
        '7.5': '30px'
      },
      borderRadius: {
        md: '10px',
        lg: '12px',
      }
    }
  },
  plugins: [
    typographyPlugin
  ],
} satisfies Config

