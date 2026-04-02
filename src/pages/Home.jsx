import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import EmpresaCard from "../components/EmpresaCard";
import Categorias from "../components/Categorias";
import { empresasData } from "../data/empresas"; // 👈
import styles from "./Home.module.css";

function Home() {
  const [empresas, setEmpresas]   = useState([]);
  const [search, setSearch]       = useState("");
  const [categoria, setCategoria] = useState("");

  useEffect(() => {
    const filtradas = empresasData.filter(e =>
      e.nombre.toLowerCase().includes(search.toLowerCase())
    );
    setEmpresas(filtradas);
  }, [search]);

  const handleSearch = (texto, cat) => {
    setSearch(texto);
    setCategoria(cat);
  };

  const empresasFiltradas = empresas.filter(e =>
    categoria === "" || e.categoria === categoria
  );

  return (
    <div className={styles.page}>
      <Navbar />
      <Hero onSearch={handleSearch} />
      <Categorias onSelect={setCategoria} categoriaActiva={categoria} />

      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Emprendimientos</h2>
          <span className={styles.sectionCount}>{empresasFiltradas.length} resultados</span>
        </div>

        <div className={styles.grid}>
          {empresasFiltradas.length > 0 ? (
            empresasFiltradas.map((e) => (
              <EmpresaCard key={e.id} empresa={e} />
            ))
          ) : (
            <div className={styles.empty}>
              <span className={styles.emptyIcon}>🔍</span>
              No se encontraron emprendimientos
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;