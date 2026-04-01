import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import ProductosGrid from "../components/ProductosGrid";

function EmpresaDetalle() {
  const { id } = useParams();

  const empresa = {
    nombre: "Dulces La Soledad",
    categoria: "Repostería",
    descripcion: "Ofrecemos dulces artesanales tradicionales de alta calidad.",
    telefono: "573001234567",
    img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
    productos: [
      { nombre: "Torta", precio: "$20.000" },
      { nombre: "Cupcake", precio: "$5.000" },
      { nombre: "Galletas", precio: "$8.000" }
    ]
  };

  return (
    <>
      <Navbar />

      <div className="px-12 py-10">
        <div className="flex gap-10">
          <img
            src={empresa.img}
            className="w-1/3 rounded-xl shadow-xl"
          />

          <div>
            <h1 className="text-3xl font-bold">
              {empresa.nombre}
            </h1>

            <p className="text-gray-300">
              {empresa.categoria}
            </p>

            <p className="mt-4">
              {empresa.descripcion}
            </p>

            <a
              href={`https://wa.me/${empresa.telefono}`}
              target="_blank"
              className="inline-block mt-6 bg-accent text-black px-6 py-2 rounded font-semibold hover:scale-105 transition"
            >
              Contactar por WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">
            Productos
          </h2>

          <ProductosGrid productos={empresa.productos} />
        </div>
      </div>
    </>
  );
}

export default EmpresaDetalle;