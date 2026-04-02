import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FaEnvelope, FaLock, FaArrowRight } from "react-icons/fa";
import styles from "./Login.module.css"; // 👈

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    login(email, password);
    navigate("/");
  };

  return (
    <div className={styles.container}>
      <div className={styles.glowTop} />
      <div className={styles.glowBottom} />

      <div className={styles.wrapper}>
        <div className={styles.brand}>
          <h1 className={styles.brandTitle}>
            SOLEDAD <span className={styles.brandAccent}>CONECTA</span>
          </h1>
          <p className={styles.brandSub}>Accede a tu cuenta para continuar</p>
        </div>

        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Iniciar sesión</h2>

          <div className={styles.field}>
            <label className={styles.label}>Correo electrónico</label>
            <div className={styles.inputRow}>
              <FaEnvelope className={styles.icon} />
              <input
                type="email"
                placeholder="tucorreo@ejemplo.com"
                className={styles.input}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Contraseña</label>
            <div className={styles.inputRow}>
              <FaLock className={styles.icon} />
              <input
                type="password"
                placeholder="••••••••"
                className={styles.input}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <button type="button" onClick={handleLogin} className={styles.btn}>
            Ingresar <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;