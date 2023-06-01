module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['"Roboto"', "sans-serif"],
        DM: ['"DM Sans"', "sans-serif"],
        inter: ['"Inter"', "sans-serif"],
        robotoSerif: ['"Roboto Serif"', "serif"],
        robotoSlab: ['"Roboto Slab"', "serif"],
        hero: ['"Hero"', "serif"],
      },
      colors: {
        lightBorder: "#EFEFEF",
        orange: "#FF9F41",
        blue: "#3EB8D4",
        black: "#040404",
        white: "#FFFFFF",
        "border-gray-300": "#33333",
        lightBlue: "#DCF8FF",
        lightGray: "#F6F6F6",
        grey: "#346259",
        red: "#F8737F",
        transparent: "#f2f2f200",
        lightRed: "#F8737F",
        profileBack: "#F9F9F9",
        green: "#6CD89E",
        placeholder: "#040404",
        custom: "#040404",
      },
    },
  },
  variants: {
    extend: {
      placeholderColor: ["responsive", "dark", "focus", "hover", "active"],
    },
  },
  plugins: [],
};
