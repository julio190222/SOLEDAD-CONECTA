import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import ProductosGrid from "../components/ProductosGrid";
import { empresasData } from "../data/empresas";

function EmpresaDetalle() {
  const { id } = useParams();
  const navigate = useNavigate();

  const empresa = empresasData.find(e => e.id === Number(id));

  if (!empresa) {
    return (
      <>
        <Navbar />
        <div className="flex flex-col items-center justify-center h-96 gap-4">
          <p className="text-xl text-gray-400">Emprendimiento no encontrado</p>
          <button
            onClick={() => navigate("/")}
            className="bg-accent text-black px-6 py-2 rounded font-semibold"
          >
            Volver al inicio
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="px-12 py-10">
        <div className="flex gap-10">
          <img
            src={empresa.img}
            alt={empresa.nombre}
            className="w-1/3 rounded-xl shadow-xl object-cover"
            onError={(e) => e.target.src = "https://picsum.photos/400/300"}
          />

          <div>
            <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-2">
              {empresa.categoria}
            </p>
            <h1 className="text-3xl font-bold mb-3">{empresa.nombre}</h1>
            <p className="text-gray-300">{empresa.descripcion}</p>

            <a
              href={`https://wa.me/${empresa.telefono}`}
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-6 bg-accent text-black px-6 py-2 rounded font-semibold hover:scale-105 transition"
            >
              Contactar por WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Productos</h2>
          <ProductosGrid productos={empresa.productos} />
        </div>
      </div>
    </>
  );
}

export default EmpresaDetalle;