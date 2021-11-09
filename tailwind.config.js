module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  imporant: false,
  darkMode: 'media',
  theme: {
    extend: {
      backgroundImage: {
        "cards-yellow-hader": "linear-gradient(180deg, rgba(247, 255, 0, 0.84), rgba(255, 0, 0, 0) 98%)",
      },
      height: {
        "80vh": "80vh"
      },
      maxHeight: {
        "80vh": "80vh"
      }
    },
  },
  variants: {
    extend: {
      backgroundImage: ["dark"]
    },
  },
  plugins: [],
}
