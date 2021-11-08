module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  imporant: false,
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      linearGradientColors: {
        "cards-yellow-hader": ["180deg", "rgba(247,255,0,0.84)", "rgba(255,0,0,0) 98%"],
        "purple-dark": "yellow"
      },
      backgroundImage: {
        "cards-yellow-hader": ["180deg", "rgba(247,255,0,0.84)", "rgba(255,0,0,0) 98%"],
        "purple-dark": "yellow"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
