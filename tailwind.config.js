/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        violet: "#8b5cf6",
        pink: "#d946ef",
        lightblue: "#e3f5ff",
        lightwhite: "#f3f3f3",
        darkbluea: "#64748b",
        verydark: "#1e293b",
        softblue: "#60a5fa",
      },
      // transitionProperty: {
      //   height: "40px",
      //   spacing: "3px, 4px",
      // },

      animation: {
        wiggle: "wiggle 3s ease-in-out 1",
        fadene: "fadene 0.2s ease-in-out 1",
        modal: "modal 0.2s ease  1",
        boxJump: "boxJump 4s infinite ",
        trans: "trans 2s ease-in-out infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "translate(280px,80px)" },
          "50%": { transform: "translate(80px,10px)" },
        },
        fadene: {
          "0%": {
            opacity: `0`,
          },
          "100%": {
            opacity: `1`,
          },
        },
        modal: {
          "0%": {
            opacity: `0`,
            transform: "scale(0.95)",
          },
          "100%": {
            opacity: `1`,
            transform: "scale(1)",
          },
        },
        trans: {
          "0%": {
            transform: "translateX(0%)",
            opacity: `0`,
          },
          "100%": {
            transform: "translateX(100%)",
            opacity: `1`,
          },
        },
        boxJump: {
          "0%": {
            transform: " translate(0px,0px)",
          },
          "25%": {
            transform: "translate(40px, -120px)",
          },
          "50%": {
            transform: " translate(80px, 0px)",
          },
          "75%": {
            transform: "translate(40px, -120px)",
          },
          "100%": {
            transform: "translate(0px, 0px)",
          },
        },
      },

      // width: {
      //   128: "32rem",
      //   1: "10px",
      //   2: "20px",
      //   3: "30px",
      //   4: "40px",
      //   5: "50px",
      //   6: "60px",
      //   7: "70px",
      //   8: "80px",
      //   9: "100px",
      //   10: "120px",
      // },
    },
    // spacing: {
    //   0: "0px",
    //   0.5: "5px",
    //   1: "8px",
    //   2: "12px",
    //   3: "16px",
    //   4: "24px",
    //   5: "32px",
    //   6: "48px",
    //   7: "52px",
    //   8: "58px",
    //   9: "62px",
    //   10: "84px",
    //   11: "100px",
    // },
    // width: {
    //   5: "50%",
    // },
  },
  // plugins: [require("tailwind-scrollbar")],
};
