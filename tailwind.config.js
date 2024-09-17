/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: ["light", "dark"],
  },
  theme: {
    extend: {
      colors: {
        "red-bull": {
          DEFAULT: "rgb(54, 113, 198)",
        },
        mclaren: {
          DEFAULT: "rgb(255, 128, 0)",
        },
        ferrari: {
          DEFAULT: "rgb(232, 0, 32)",
        },
        mercedes: {
          DEFAULT: "rgb(39, 244, 210)",
        },
        "aston-martin": {
          DEFAULT: "rgb(34, 153, 113)",
        },
        rb: {
          DEFAULT: "rgb(102, 146, 255)",
        },
        haas: {
          DEFAULT: "rgb(182, 186, 189)",
        },
        alpine: {
          DEFAULT: "rgb(0, 147, 204)",
        },
        williams: {
          DEFAULT: "rgb(100, 196, 255)",
        },
        sauber: {
          DEFAULT: "rgb(0, 0, 0)",
        },
      },
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [daisyui],
}
