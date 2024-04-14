import type { Config } from 'tailwindcss'

const {fontFamily} = require('tailwindcss/defaultTheme')

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
     fontFamily: {
      mont: ['var(--font-mont)', ...fontFamily.sans]
     },
     colors: {
      dark:"#1b1b1b",
      light:"#f5f5f5",
      primary:"#B63E96",
      primaryDark:"#58E6D9"
     }
    },
  },
  plugins: [],
}
export default config
