import { useNavigate } from "react-router-dom";

function EmpresaCard({ empresa }) {
  const navigate = useNavigate();

  return (
    <div className="bg-card rounded-xl shadow-lg overflow-hidden">
      <img
        src={empresa.imagen}
        alt={empresa.nombre}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h3 className="text-lg font-bold">{empresa.nombre}</h3>
        <p className="text-sm text-gray-400">{empresa.categoria}</p>

        <button
          onClick={() => navigate(`/empresa/${empresa.id}`)}
          className="mt-4 bg-accent text-black px-4 py-2 rounded"
        >
          Ver más
        </button>
      </div>
    </div>
  );
}

export default EmpresaCard;