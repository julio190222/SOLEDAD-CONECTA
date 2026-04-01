import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate(); // 👈 clave
  const [email, setEmail] = useState("");

  const handleLogin = () => {
    login(email);

    // 🔥 Redirección
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-card p-8 rounded-xl shadow-xl w-96">
        <h2 className="text-2xl mb-6">Iniciar sesión</h2>

        <input
          type="email"
          placeholder="Correo"
          className="w-full p-2 mb-4 text-black"
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-accent text-black py-2 rounded"
        >
          Ingresar
        </button>
      </div>
    </div>
  );
}

export default Login;