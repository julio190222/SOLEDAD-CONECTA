import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import EmpresaCard from "../components/EmpresaCard";
import API from "../services/api";

function Home() {
  const [empresas, setEmpresas] = useState([]);
  const [search, setSearch] = useState("");
  const [categoria, setCategoria] = useState("");

  useEffect(() => {
    API.get(`/empresas?search=${search}`)
      .then(res => setEmpresas(res.data))
      .catch(err => console.error(err));
  }, [search]);

  const handleSearch = (texto, cat) => {
    setSearch(texto);
    setCategoria(cat);
  };

  // Filtro por categoría en frontend
  const empresasFiltradas = empresas.filter(e =>
    categoria === "" || e.categoria === categoria
  );

  return (
    <>
      <Navbar />
      <Hero onSearch={handleSearch} />

      <div className="px-12 py-12">
        <h2 className="text-2xl font-bold mb-8">
          Emprendimientos
        </h2>

        <div className="grid grid-cols-3 gap-8">
          {empresasFiltradas.map((e) => (
            <EmpresaCard key={e.id} empresa={e} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;