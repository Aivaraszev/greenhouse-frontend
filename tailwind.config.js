/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: "#202329",
          light: "#393e49",
        },
        neon: "#BFFA00",
        accent: {
          DEFAULT: "#E6F5FB",
          dark: "#b0d7e7",
        },
      },
    },
    fontFamily: {
      sora: ["Sora", "sans-serif"],
    },
  },
  plugins: [],
};
