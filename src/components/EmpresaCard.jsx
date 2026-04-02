import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import styles from "./EmpresaCard.module.css";

function EmpresaCard({ empresa }) {
  const navigate = useNavigate();

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img
          src={empresa.img || "https://picsum.photos/400/200"}
          alt={empresa.nombre}
          className={styles.image}
          onError={(e) => e.target.src = "https://picsum.photos/400/200"}
        />
        <span className={styles.badge}>{empresa.categoria}</span>
      </div>

      <div className={styles.body}>
        <h3 className={styles.name}>{empresa.nombre}</h3>
        <p className={styles.description}>{empresa.descripcion}</p>

        <button
          className={styles.btn}
          onClick={() => navigate(`/empresa/${empresa.id}`)}
        >
          Ver más <FaArrowRight size={11} />
        </button>
      </div>
    </div>
  );
}

export default EmpresaCard;