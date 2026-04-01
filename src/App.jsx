import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import EmpresaDetalle from "./pages/EmpresaDetalle";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";


function App() {
  return (
    <BrowserRouter>
      <div className="bg-primary text-white min-h-screen font-sans">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/empresa/:id" element={<EmpresaDetalle />} />
          <Route path="/admin" element={<ProtectedRoute role="admin"><h1>Panel Admin</h1></ProtectedRoute>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
