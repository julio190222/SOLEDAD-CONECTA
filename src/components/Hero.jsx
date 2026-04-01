import { useState } from "react";

function Hero({ onSearch }) {
  const [texto, setTexto] = useState("");
  const [categoria, setCategoria] = useState("");

  const handleClick = () => {
    onSearch(texto, categoria);
  };

  return (
    <div className="bg-secondary py-24 text-center">
      <h2 className="text-4xl font-bold mb-10">
        Buscar emprendimientos...
      </h2>

      <div className="flex justify-center">
        <div className="flex items-center bg-white rounded-full overflow-hidden shadow-lg w-[600px]">
          
          <select
            className="px-4 py-3 text-black outline-none bg-transparent"
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value="">Todas las Categorías</option>
            <option value="Moda">Moda</option>
            <option value="Gastronomía">Gastronomía</option>
            <option value="Servicios">Servicios</option>
          </select>

          <input
            type="text"
            placeholder="Buscar emprendimiento..."
            className="flex-1 px-4 py-3 text-black outline-none"
            onChange={(e) => setTexto(e.target.value)}
          />

          <button
            onClick={handleClick}
            className="bg-accent px-6 py-3 font-semibold text-black hover:scale-105 transition"
          >
            Buscar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;