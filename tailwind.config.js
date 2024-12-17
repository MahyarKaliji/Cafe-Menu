/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        mainBg: "url('../images/bg-01.jpg')",
      },
      fontFamily: {
        logo: ["Oi"],
        vazir: ["Vazir"],
        iran: ["Iran"],
      },
      colors: {
        primary: "#5F2509",
        secondary: "#00030E",
        tertiary: "#E9E9E9",
        quaternary: "#FF9429",
      },
      boxShadow: {
        category: "0 0 20px 5px #FF9429",
      },
    },
  },
  plugins: [],
};
