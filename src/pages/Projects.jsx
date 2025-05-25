import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import projects from "../data/projects.json"; // asegúrate que esta ruta es correcta

export default function Projects() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="projects-home-container">
            <h2 className="text-center mb-4">Mis Proyectos</h2>
            <div className="row g-4">
                {projects?.map((project) => (
                    <div key={project.id} className="col-12">
                        <div
                            className="card h-100 text-center shadow"
                            data-aos="fade-up"
                            style={{ minHeight: "200px" }}
                        >
                            <div className="card-header bg-dark text-white">{project.name}</div>
                            <div className="card-body">
                                <h5 className="card-title"></h5>
                                <p className="card-text text-muted black" style={{ fontSize: "0.9rem", color: "black" }}>
                                    {project.description}
                                </p>
                                <a href={project.url} className="btn btn-dark text-white rounded-pill" target="_blank">
                                    Ver más
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
