module.exports = {
  content: ["./components/**/*.{tsx,js,ts}", "./pages/**/*.{tsx,js,ts}"],
  theme: {
    debugScreens: {
      position: ["bottom", "right"],
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      fontFamily: { poppins: ["Poppins", "sans-serif"] },
      colors: {
        bgBody: "#E4E4E4",
        primary: "#877E76",
        secondary: "#F3EEEE",
        titleColor: "#666666",
        btnColor: "#B8D9F6",
        sideBarIconBg: "#E8DBD0",
        chatBg: "#E4EFFA",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
    require("tailwindcss-debug-screens"),
  ],
};
