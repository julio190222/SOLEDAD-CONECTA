/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   extend: {
    colors: {
      primary: "#0A192F",     // fondo principal (más oscuro)
      secondary: "#112240",   // secciones
      accent: "#FFD700",      // amarillo real
      card: "#1B2A41",        // tarjetas
      textSoft: "#A8B2D1"     // texto gris elegante
    }
  }
  },
  plugins: [],
}