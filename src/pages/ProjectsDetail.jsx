import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import projects from "../data/projects.json";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const { t } = useTranslation();

  useEffect(() => {
    const foundProject = projects.find((p) => p.id.toString() === id);
    setProject(foundProject);
  }, [id]);

  if (!project) {
    return <h2 className="text-center mt-4">Proyecto no encontrado</h2>;
  }

  return (
    <div className="container mt-5"style={{ minHeight: "calc(100vh - 150px)" }}>
      <div className="card shadow h-100 text-center" style={{ maxWidth: "1000px", margin: "10rem"}}>
        <div className="card-header bg-dark text-white">
          {t(`projects.projects_data.${project.id}.name`, { defaultValue: project.name })}
        </div>
        <div className="card-body">
          <p className="text-muted mb-4" style={{ fontSize: "0.9rem", color: "black" }}>
            {t(`projects.projects_data.${project.id}.description`, { defaultValue: project.description })}
          </p>
          {project.technologies?.length > 0 && (
            <div className="mb-4">
              <h5>{t("projects.technologies_used")}</h5>
              <ul className="list-unstyled">
                {project.technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>
          )}
          {project.url && (
            <a href={project.url} target="_blank" rel="noreferrer" className="btn btn-dark text-white rounded-pill">
              {t("more")}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
