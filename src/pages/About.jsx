import React from "react";
import technologies from '../data/technologies.json';


const About = () => {

    return (
        <div className="about-container d-flex flex-column flex-md-row w-100 p-4 gap-4">
            {/* Izquierda */}
            <div className="left-side-about col-md-6 text-wrapper w-700px" style={{marginTop:"60px"}}>
                <h1 className="fw-bold d-flex justify-content-center">Conóceme</h1>
                <p className="text-muted">
                    Soy un desarrollador web con una fuerte orientación a resultados, especializado en crear soluciones digitales eficientes, escalables y visualmente atractivas. Mi enfoque combina una sólida base técnica con una comprensión profunda de la experiencia del usuario, lo que me permite construir productos que no solo funcionan, sino que conectan con las personas.


                    A lo largo de mi trayectoria, he trabajado con tecnologías modernas del ecosistema frontend y backend, adaptándome rápidamente a nuevos entornos y desafíos. Me apasiona escribir código limpio, optimizado y mantenible, siempre alineado con las mejores prácticas del desarrollo actual.


                    Más allá del código, valoro el trabajo en equipo, la comunicación efectiva y el aprendizaje continuo como pilares fundamentales en cada proyecto. Mi objetivo es aportar valor real a través de la tecnología, impulsando experiencias digitales que generen impacto.
                </p>
            </div>

            {/* Derecha */}
            <div className="right-side-about col-md-6" style={{marginTop:"60px"}}>
                <h1 className="fw-bold mb-3 d-flex justify-content-center">Tecnologías</h1>
                <div className="d-flex flex-wrap justify-content-center gap-3" style={{marginTop:"70px"}}>
                    {technologies.map((technologie) => (
                        <span
                            key={technologie.id}
                            className={`badge bg-${technologie.color} px-3 py-2 fs-6 shadow`}
                        >
                            {technologie.name}
                        </span>
                    ))}
                </div>
            </div>
        </div>

    )
}
export default About;