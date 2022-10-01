/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "#7f7f7f",
        "gray-2": "#6a6969",
        "gray-4": "#8491a4",
        "gray-3": "#ced4da",
        "gray-5": "#808080",
        blue: "#14f1d7",
      },
      backgroundImage: {
        banner:
          "url('https://firebasestorage.googleapis.com/v0/b/images-c1654.appspot.com/o/files%2Fbig-city.jpg?alt=media&token=8cf6b135-b966-40b8-88bf-083800166eb5')",
      },
      height: {
        128: "510px",
      },
    },
  },
  plugins: [],
};
