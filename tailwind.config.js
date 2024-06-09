/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#333333",
        secondary: "#4F4F4F",
        third: "#2D9CDB",
        textThird: "#828282",
        fourth: "#BDBDBD",
        bgcol: "#100E1D",
        bgcol1: "#F2F2F2",
        bgcol2: "#E0E0E0",
        bgcol3: "#27AE60",
        bgcol4: "#EB5757",
        bgcol5: "#E0E0E0",
      },
      margin: { 168: "168px" },
      padding: {
        267: "267px",
      },
      fontFamily: {
        Heebo: ["Heebo", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
