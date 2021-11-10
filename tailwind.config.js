module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  imporant: false,
  darkMode: 'media',
  theme: {
    extend: {
      backgroundImage: {
        "cards-yellow-hader": "linear-gradient(180deg, rgba(247, 255, 0, 0.84), rgba(255, 0, 0, 0) 98%)",
        "cards-white-hader": "linear-gradient(0deg, rgba(255, 251, 251, 0.74), rgba(249, 249, 249, 0.68) 73%)",
        "cards-aqua-body": "linear-gradient(180deg, rgba(32, 255, 0, 0.53), rgba(255, 0, 0, 0) 150.71%), linear-gradient(180deg, rgba(48, 255, 100, 0.16), rgba(51, 68, 63, 0.37) 80.71%), linear-gradient(300deg, rgba(0, 0, 255, 0.76), rgba(0, 0, 255, 0) 190.71%)",
      },
      height: {
        "80vh": "80vh"
      },
      maxHeight: {
        "80vh": "80vh"
      },
      boxShadow: {
        haderMenu: "0px 0px 20px white"
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
