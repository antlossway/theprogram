/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./_site/**/*.{html,js,njk}"],
  theme: {
    extend: {
      fontFamily: {
        volume: ["Volume", "sans-serif"],
        "volume-sans": ["Volume Sans", "sans-serif"],
        "volume-italic": ["Volume Italic", "sans-serif", "italic"],
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
        link: {
          DEFAULT: "hsl(1 76% 32%)",
          dark: "hsl(1 56% 40%)",
          // dark: "hsl(32 100% 80%)",
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
