/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#fff5f0',
          100: '#ffe8dc',
          200: '#ffc9b3',
          300: '#ffa07a',
          400: '#ff7a4f',
          500: '#f05a2a',
          600: '#d44019',
          700: '#b03010',
          800: '#8c2410',
          900: '#6b1c0d',
        },
        accent: {
          DEFAULT: '#C8572A',
          light: '#E8724A',
          dark: '#9E3D1A',
        },
        ink: {
          DEFAULT: '#1a1510',
          soft: '#3d3228',
          muted: '#7a6a5a',
          faint: '#c4b8ac',
        },
        cream: {
          DEFAULT: '#FAF6F1',
          dark: '#F0E9DF',
          deeper: '#E5D9CC',
        }
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        body: ['Noto Serif JP', 'Georgia', 'serif'],
        sans: ['Noto Sans JP', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
