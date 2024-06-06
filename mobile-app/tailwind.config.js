/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./constants/**/*.{js,jsx,ts,tsx}",
    "./hooks/**/*.{js,jsx,ts,tsx}",
    "./scripts/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          primary: "#FF6036",
          secondary: "#FF5642",
          tertiary: "#FE3A63",
          quaternary: "#FD267A",
          quinary: "#FF5642",
          senary: "#FF5642",
          septenary: "#FF5642",
          octonary: "#FF5642",
          pastel: "#FFF6F9",
        },
        gray: {
          stroke: "#F0F2F5",
        },
      },
      gradientColorStops: (theme) => ({
        ...theme("colors"),
        start: "#FD267A",
        middle: "#FE3A63",
        end: "#FF6036",
      }),
    },
  },
  plugins: [],
};
