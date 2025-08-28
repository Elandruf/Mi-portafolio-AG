import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import projects from "../data/projects.json";
import { useTranslation } from "react-i18next";

import { useNavigate } from "react-router-dom";

const  Projects= () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once:true });
  }, []);

  return (
    <div className="projects-home-container">
      <h2 className="text-center mb-4">{t("projects.my_projects")}</h2>

      <div className="row g-4">
        {projects?.map((project) => {
          const projectName = t(`projects.projects_data.${project.id}.name`, { defaultValue: project.name });
          const projectDescription = t(`projects.projects_data.${project.id}.description`, { defaultValue: project.description });

          return (
            <div key={project.id} className="col-12">
              <div
                className="card h-100 text-center shadow"
                data-aos="fade-up"
                style={{ minHeight: "50px", maxWidth: "1000px", margin: "2rem auto", cursor: "pointer" }}
                onClick={() => navigate(`/projects/${project.id}`)}
              >
                <div className="card-header bg-dark text-white">{projectName}</div>
                <div className="card-body">
                  <p className="card-text text-muted" style={{ fontSize: "0.9rem", color: "black" }}>
                    {projectDescription}
                  </p>
                  <span className="btn btn-dark text-white rounded-pill" style={{ marginTop: "30px" }}>
                    {t("more")}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;