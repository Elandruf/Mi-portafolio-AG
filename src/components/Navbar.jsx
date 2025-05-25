import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-md bg-white shadow-sm py-3">
      <div className="container">
        <span
          className="navbar-brand fw-bold text-dark text-uppercase"
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        >
          Andres Eduardo Garcia
        </span>

        {/* Botón hamburguesa */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Contenido colapsable */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto gap-md-3 text-center text-md-start">
            <li className="nav-item">
              <a className="nav-link boton-negro-navbar" onClick={() => navigate("/")}>
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link boton-negro-navbar" onClick={() => navigate("/projects")}>
                Proyectos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link boton-negro-navbar" onClick={() => navigate("/about")}>
                Sobre Mi
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link boton-negro-navbar" onClick={() => navigate("/contact")}>
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
