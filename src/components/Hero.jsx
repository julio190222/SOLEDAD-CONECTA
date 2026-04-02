import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import styles from "./Hero.module.css";

function Hero({ onSearch }) {
  const [texto, setTexto]       = useState("");
  const [categoria, setCategoria] = useState("");

  const handleClick = () => {
    onSearch(texto, categoria);
  };

  return (
    <div className={styles.hero}>
      <h2 className={styles.title}>
        Descubre <span className={styles.titleAccent}>emprendimientos</span><br />
        de tu comunidad
      </h2>
      <p className={styles.subtitle}>Apoya el talento local de Soledad, Atlántico</p>

      <div className={styles.searchBar}>
        <select
          className={styles.select}
          onChange={(e) => {
            setCategoria(e.target.value);
            onSearch(texto, e.target.value);
          }}
        >
          <option value="">Todas las categorías</option>
          <option value="Gastronomía">Gastronomía</option>  {/* 👈 coincide con empresa.js */}
          <option value="Moda">Moda</option>
          <option value="Servicios">Servicios</option>
        </select>

        <input
          type="text"
          placeholder="Buscar emprendimiento..."
          className={styles.input}
          onChange={(e) => {
            setTexto(e.target.value);
            onSearch(e.target.value, categoria);
          }}
        />

        <button className={styles.btn} onClick={handleClick}>
          <FaSearch /> Buscar
        </button>
      </div>
    </div>
  );
}

export default Hero;