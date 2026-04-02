import { FaTshirt, FaHamburger, FaTools, FaPaintBrush } from "react-icons/fa";
import { MdApps } from "react-icons/md";
import styles from "./Categorias.module.css";

function Categorias({ onSelect, categoriaActiva }) {
  const categorias = [
    { nombre: "Gastronomía", icon: <FaHamburger /> },
    { nombre: "Moda",        icon: <FaTshirt />    },
    { nombre: "Servicios",   icon: <FaTools />     },
  ];

  return (
    <div className={styles.wrapper}>
      <div
        onClick={() => onSelect("")}
        className={`${styles.chip} ${categoriaActiva === "" ? styles.chipActive : ""}`}
      >
        <MdApps className={styles.icon} />
        Todas
      </div>

      {categorias.map((cat, i) => (
        <div
          key={i}
          onClick={() => onSelect(cat.nombre)}
          className={`${styles.chip} ${categoriaActiva === cat.nombre ? styles.chipActive : ""}`}
        >
          <span className={styles.icon}>{cat.icon}</span>
          {cat.nombre}
        </div>
      ))}
    </div>
  );
}

export default Categorias;