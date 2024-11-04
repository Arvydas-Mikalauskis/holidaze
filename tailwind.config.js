/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Cinzel', 'serif'],
        body: ['Lora', 'sans-serif'],
      },
      colors: {
        gold: '#E5BA57',
        platinum: '#DBDBDB',
      },
    },
  },
  plugins: [],
}
