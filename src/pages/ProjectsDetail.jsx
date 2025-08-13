import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 
import projects from "../data/projects.json";

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const foundProject = projects.find((p) => p.id.toString() === id);
    setProject(foundProject);
  }, [id]);

  if (!project) {
    return <h2 className="text-center mt-4">Proyecto no encontrado</h2>;
  }

  return (
    <div 
      className="container mt-5" 
      style={{ minHeight: "calc(100vh - 150px)" }} // Ajusta 150px según navbar+footer
    >
      <div className="row align-items-center">
        
        {/* Imagen */}
        <div className="col-md-6">
          <img 
            src={project.image} 
            alt={project.name} 
            className="img-fluid rounded shadow"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        {/* Información */}
        <div 
          className="col-md-6 d-flex flex-column justify-content-between" 
          style={{ minHeight: "100%" }}
        >
          <div>
            <h1 className="mb-3 text-center">{project.name}</h1>
            <p className="text-muted">{project.description}</p>
          </div>

          {/* Tecnologías */}
          {project.technologies && project.technologies.length > 0 && (
            <div className="mt-4">
              <h5>Tecnologías usadas:</h5>
              <ul>
                {project.technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Botón */}
          {project.url && (
            <a 
              href={project.url} 
              target="_blank" 
              rel="noreferrer" 
              className="btn btn-dark mt-4"
            >
              Ver proyecto
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
