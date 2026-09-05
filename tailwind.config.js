/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0B0B0C',
        charcoal: '#1A1A1A',
        stone: '#8C8880',
        bone: '#F3F1EC',
        brass: '#AD8A54',
        'brass-light': '#C9A971',
        rust: '#7A3B33',
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Manrope"', 'sans-serif'],
      },
      maxWidth: {
        prose: '38rem',
      },
    },
  },
  plugins: [],
}
