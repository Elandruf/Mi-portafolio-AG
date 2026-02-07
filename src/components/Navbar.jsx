import React, {useEffect} from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import '../styles/Home.css'


const Navbar = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

   useEffect(() => {
    const navLinks = document.querySelectorAll(".nav-link");
    const navbarCollapse = document.getElementById("navbarContent");

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (navbarCollapse.classList.contains("show")) {
          new window.bootstrap.Collapse(navbarCollapse).toggle();
        }
      });
    });

    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener("click", () => {});
      });
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-md bg-gray shadow-sm py-3">
      <div className="container">
        <span
          className="navbar-brand fw-bold text-shadow text-uppercase"
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
                <a className="nav-link boton-negro-navbar" style={{color:"black"}} onClick={() => navigate("/")}>
                  {t("navbar.home")}
                </a>
              </strong>
            </li>
            <li className="nav-item">
              <strong>
                <a className="nav-link boton-negro-navbar" style={{color:"black"}} onClick={() => navigate("/projects")}>
                  {t("navbar.projects")}
                </a>
              </strong>
            </li>
            <li className="nav-item">
              <strong>
                <a className="nav-link boton-negro-navbar" style={{color:"black"}} onClick={() => navigate("/about")}>
                  {t("navbar.about")}
                </a>
              </strong>
            </li>
            <li className="nav-item">
              <strong>
                <a className="nav-link boton-negro-navbar" style={{color:"black"}} onClick={()=> navigate("/experience")}>
                  {t("navbar.experience")}
                </a>
              </strong>
            </li>
            <li>
              <div className="translate-buttons-container justify-content-center">
                <button
                  className="translate-button"
                  onClick={() => changeLanguage('es')}
                  style={{color:"black"}}
                >
                  ES
                </button>
                <button
                  className="translate-button"
                  onClick={() => changeLanguage('en')}
                  style={{color:"black"}}
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
