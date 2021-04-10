module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "6rem",
        "2xl": "7rem",
      },
    },
    extend: {},
  },
  variants: {
    display: ['responsive', 'group-hover', 'group-focus'],
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
