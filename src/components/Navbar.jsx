import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import '../styles/Home.css'


const Navbar = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="navbar navbar-expand-md bg-black shadow-sm py-3">
      <div className="container">
        <span
          className="navbar-brand fw-bold text-light text-uppercase"
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        >
          Andres Eduardo Garcia
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto gap-md-3 text-center text-md-start">
            <li className="nav-item">
              <strong>
                <a className="nav-link boton-negro-navbar" style={{color:"white"}} onClick={() => navigate("/")}>
                  {t("navbar.home")}
                </a>
              </strong>
            </li>
            <li className="nav-item">
              <strong>
                <a className="nav-link boton-negro-navbar" style={{color:"white"}} onClick={() => navigate("/projects")}>
                  {t("navbar.projects")}
                </a>
              </strong>
            </li>
            <li className="nav-item">
              <strong>
                <a className="nav-link boton-negro-navbar" style={{color:"white"}} onClick={() => navigate("/about")}>
                  {t("navbar.about")}
                </a>
              </strong>
            </li>
            <li>
              <div className="translate-buttons-container">
                <button
                  className="translate-button"
                  onClick={() => changeLanguage('es')}
                  style={{color:"white"}}
                >
                  ES
                </button>
                <button
                  className="translate-button"
                  onClick={() => changeLanguage('en')}
                  style={{color:"white"}}
                >
                  EN
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
