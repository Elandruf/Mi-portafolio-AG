import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import projects from "../data/projects.json";
import { useTranslation } from "react-i18next";

export default function Projects() {

  const { t, i18n } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

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
                style={{ minHeight: "50px", maxWidth: "1000px", margin: "2rem auto" }}
              >
                <div className="card-header bg-dark text-white">{projectName}</div>
                <div className="card-body">
                  <p className="card-text text-muted black" style={{ fontSize: "0.9rem", color: "black" }}>
                    {projectDescription}
                  </p>
                  <a href={project.url} className="btn btn-dark text-white rounded-pill" target="_blank" rel="noreferrer" style={{marginTop:"30px"}}>
                    {t("more")}
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
