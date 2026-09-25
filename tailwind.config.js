/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        wine: {
          DEFAULT: '#6D1F3A',
          deep: '#6D1F3A',
          burgundy: '#4A1025',
          soft: '#8A3D59',
        },
        ivory: '#FAF8F5',
        paper: '#FFFFFF',
        charcoal: '#1F1F1F',
        stone: '#6B6B6B',
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      maxWidth: {
        content: '1180px',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
