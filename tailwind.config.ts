import type { Config } from 'tailwindcss'
import animate from 'tailwindcss-animate'

const config: Config = {
  darkMode: ['class'],
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#C35831',
        secondary: '#45B5AA',
        desert: {
          light: '#F2E9DE',
          DEFAULT: '#D9C2A8',
          dark: '#A67C52',
        },
      },
    },
  },
  plugins: [animate],
}
export default config