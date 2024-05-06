/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3d8db3",
        secondary: "#1281a3",
        orange: "#FF5533 ", // Añadimos el color naranja con su código hexadecimal
        memo: "#FFFFFF",
        morado: "#6a0dad",
        moradobajo: "#a093c7"
      },
    },
  },
  plugins: [],
};
