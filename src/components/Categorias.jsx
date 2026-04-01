import { FaTshirt, FaHamburger, FaPaintBrush, FaTools } from "react-icons/fa";

function Categorias() {
  const categorias = [
    { nombre: "Artesanías", icon: <FaPaintBrush /> },
    { nombre: "Gastronomía", icon: <FaHamburger /> },
    { nombre: "Moda", icon: <FaTshirt /> },
    { nombre: "Servicios", icon: <FaTools /> },
  ];

  return (
    <div className="flex justify-center gap-8 py-6 bg-primary">
      {categorias.map((cat, i) => (
        <div
          key={i}
          className="flex items-center gap-2 bg-secondary px-5 py-2 rounded-lg hover:bg-accent hover:text-black cursor-pointer transition"
        >
          {cat.icon}
          {cat.nombre}
        </div>
      ))}
    </div>
  );
}

export default Categorias;