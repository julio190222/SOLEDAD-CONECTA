import { FaUser } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-16 py-4 bg-primary/90 backdrop-blur-md shadow-md">
      
      <h1 className="text-2xl font-bold tracking-wide">
        SOLEDAD <span className="text-accent">CONECTA</span>
      </h1>

      <ul className="flex gap-10 text-sm font-medium">
        <li className="border-b-2 border-accent pb-1">Inicio</li>
        <li className="hover:text-accent cursor-pointer">Categorías</li>
        <li className="hover:text-accent cursor-pointer">Sobre Nosotros</li>
      </ul>

      <button className="flex items-center gap-2 bg-accent text-black px-5 py-2 rounded-lg font-semibold hover:scale-105 transition">
        <FaUser /> Ingresar
      </button>
    </nav>
  );
}

export default Navbar;