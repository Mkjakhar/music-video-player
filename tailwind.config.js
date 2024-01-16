export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "12px",
      },
      fontFamily: {
        Merriweather: ["Merriweather", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        blue: "#000638",
        light_blue: "#283A61",
        gray: "#605C59",
        light_gray: "#5F5F5F",
        dark_gray: "#515151",
        light_black: "#434343",
        dark_black: "#4F4F4F",
        "gray-800": "#DFE6FF",
        brown: "#544B44",
        dark_brown: "#3E3E3E",
        light_brown: "#303030",
        white_off: "#FEFEFE",
        white_off_2: "#F5F5F5",
      },
      fontSize: {
        "3xl": "26px",
        "6xl": "46px",
      },
      boxShadow: {
        xl: "0px 5px 10px 0px rgba(0, 0, 0, 0.50)",
      },
    },
  },
  plugins: [],
};
