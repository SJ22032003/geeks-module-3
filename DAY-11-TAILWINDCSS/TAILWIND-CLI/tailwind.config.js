/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.html"],
  theme: {
    extend: {
      fontSize: {
        xxs: ["2px"],
        xl: ["60px"],
        "10xl": ["25rem"]
      },
      backgroundColor: {
        primary: "#d3d3d3",
        secondary: "#000"
      },
      width: {
        "meri-width": "1000px"
      }
    },
  },
  plugins: [],
}

