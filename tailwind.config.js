/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins: ['Poppins'],
      },
      colors:{
        text:'#393F48',
        brand:'#EF5DA8',
      }
    },
  },
  plugins: [],
}
