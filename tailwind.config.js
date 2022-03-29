module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  mode: "jit",
  darkMode: true, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ["Montserrat", "sans-serif"],
      body: ["Montserrat", "sans-serif"],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#F0F2F2',
      'primary': '#4ACAFC',
      'secondary': '#85dcff',
      'midnight': '#0F1123',
      'disable': '#aeaeae',
      'night': '#2B2D3B',
      'black': '#000000',
    },
    extend: {
      screens: {
        mf: "990px",
      },
      keyframes: {
        "slide-in": {
          "0%": {
            "-webkit-transform": "translateX(120%)",
            transform: "translateX(120%)",
          },
          "100%": {
            "-webkit-transform": "translateX(0%)",
            transform: "translateX(0%)",
          },
        },
        "slide-out": {
          "0%": {
            "-webkit-transform": "translateX(0%)",
            transform: "translateX(0%)",
          },
          "100%": {
            "-webkit-transform": "translateX(120%)",
            transform: "translateX(120%)",
          },
        },
      },
      animation: {
        "slide-in": "slide-in 0.5s ease-out",
        "slide-out": "slide-out 0.5s ease-in",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};