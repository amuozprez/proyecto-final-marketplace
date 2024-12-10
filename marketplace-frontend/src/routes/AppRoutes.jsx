import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Categorias from "../pages/Categorias.jsx";
import ProductoDetalle from "../pages/ProductoDetalle.jsx";
import Perfil from "../pages/Perfil.jsx";
import Contacto from "../pages/Contacto.jsx";
import Nosotros from "../pages/Nosotros.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import CrearPublicacion from "../pages/CrearPublicacion.jsx";
import MisFavoritos from "../pages/MisFavoritos.jsx";
import Ajustes from "../pages/Ajustes.jsx"; // Importamos Ajustes
import MisAnuncios from "../pages/MisAnuncios.jsx"; // Importa componente "Mis Anuncios"
import Cart from "../components/Cart.jsx";
import ProtectedRoute from "../components/ProtectedRoute.jsx";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categorias" element={<Categorias />} />
      <Route path="/producto/:id" element={<ProductoDetalle />} />
      <Route
        path="/perfil"
        element={
          <ProtectedRoute>
            <Perfil />
          </ProtectedRoute>
        }
      />
      <Route
        path="/ajustes"
        element={
          <ProtectedRoute>
            <Ajustes />
          </ProtectedRoute>
        }
      />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/nosotros" element={<Nosotros />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/publicar"
        element={
          <ProtectedRoute>
            <CrearPublicacion />
          </ProtectedRoute>
        }
      />
      <Route
        path="/favoritos"
        element={
          <ProtectedRoute>
            <MisFavoritos />
          </ProtectedRoute>
        }
      />
      <Route
        path="/mis-anuncios"
        element={
          <ProtectedRoute>
            <MisAnuncios />
          </ProtectedRoute>
        }
      />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default AppRoutes;
