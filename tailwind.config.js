module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif']
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
