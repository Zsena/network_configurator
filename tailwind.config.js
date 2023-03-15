/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ejs}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('https://www.thecloudcasting.com/wp-content/uploads/slide11-1.jpg')",
      },
      colors: {
        "light-purple": "#ECEEFF",
        "base-gray": "#636363",
        "secondary-gray": "#696969",
        "base-black": "#34313F",
        "black-lighter": "#3D3D3D",
        "light-purple": "#EFF1FF",
        green: "#32CD9F",
        orange: "#F59778",
        "dirty-white": "#F5F5F5",
        blue: "#14A8D6",
        "dark-blue": "#220970",
      },
    },
  },
  plugins: [],
};
