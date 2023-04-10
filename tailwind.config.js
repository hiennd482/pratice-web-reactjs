/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        violet: "#8b5cf6",
        pink: "#d946ef",
      },
      width: {
        128: "32rem",
        1: "10px",
        2: "20px",
        3: "30px",
        4: "40px",
        5: "50px",
        6: "60px",
        7: "70px",
        8: "80px",
        9: "100px",
        10: "120px",
      },
    },
    spacing: {
      0: "0px",
      0.5: "5px",
      1: "8px",
      2: "12px",
      3: "16px",
      4: "24px",
      5: "32px",
      6: "48px",
      7: "52px",
      8: "58px",
      9: "62px",
      10: "84px",
      11: "100px",
    },
    // width: {
    //   5: "50%",
    // },
  },
  plugins: [],
};
