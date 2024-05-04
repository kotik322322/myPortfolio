import type { Config } from 'tailwindcss'

const {fontFamily} = require('tailwindcss/defaultTheme')

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: "class",
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
     },
     animation: {
      "spin-slow": "spin 8s linear infinite"
     },
     backgroundImage:{
      circularLight: "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px, #f5f5f5 100px)",
      circularDark: "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 5px, #1b1b1b 100px)",
      circularLightLg: "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px, #f5f5f5 80px)",
      circularDarkLg: "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 5px, #1b1b1b 80px)",
     }, 
     screens: {
      // "2xl": { max: "1535px" },
      // // => @media (max-width: 1535px) { ... }
  
      // xl: { max: "1279px" },
      // // => @media (max-width: 1279px) { ... }
  
      // lg: { max: "1023px" },
      // // => @media (max-width: 1023px) { ... }
  
      // md: { max: "767px" },
      // // => @media (max-width: 767px) { ... }
  
      // sm: { max: "639px" },
      // // => @media (max-width: 639px) { ... }
  
      // xs: { max: "479px" },
      // // => @media (max-width: 479px) { ... }
      "xs": "480px",
      // => @media (max-width: 479px) { ... }
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
  },
    },
  },
  plugins: [],
}
export default config
