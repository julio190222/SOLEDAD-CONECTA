import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className={styles.nav}>
      <h1
        className={styles.logo}
        onClick={() => navigate("/")}     // 👈 navega al home
        style={{ cursor: "pointer" }}
      >
        SOLEDAD <span className={styles.logoAccent}>CONECTA</span>
      </h1>

      <ul className={styles.menu}>
        <li className={`${styles.menuItem} ${styles.menuItemActive}`}>Inicio</li>
        <li className={styles.menuItem}>Categorías</li>
        <li className={styles.menuItem}>Sobre Nosotros</li>
      </ul>

      <button className={styles.btn} onClick={() => navigate("/login")}>
        <FaUser /> Ingresar
      </button>
    </nav>
  );
}

export default Navbar;