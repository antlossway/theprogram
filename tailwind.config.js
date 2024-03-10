/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./_site/**/*.{html,js,njk}"],
  theme: {
    extend: {
      fontFamily: {
        volume: ["Volume", "sans-serif"],
      },
      colors: {
        body: {
          DEFAULT: "hsl(48 33% 97%)",
          dark: "hsl(48 33% 9%)",
        },
        primary: {
          DEFAULT: "hsl(32 21% 14%)",
          dark: "hsl(36 10% 80%)",
        },
      },
      listStyleType: {
        square: "square",
        roman: "upper-roman",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
