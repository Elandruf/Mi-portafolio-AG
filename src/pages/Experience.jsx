import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const Experience = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const experiences = t("experiences.experience_data", { returnObjects: true });

  return (
    <div className="projects-home-container">
      <h2 className="text-center mb-4">{t("experiences.my_experiences")}</h2>
      

      <div className="row g-4">
        {Object.keys(experiences).map((key) => {
          const exp = experiences[key];
          return (
            <div key={key} className="col-12">
              <div
                className="card h-100 shadow"
                data-aos="fade-up"
                style={{
                  minHeight: "50px",
                  maxWidth: "800px",
                  margin: "2rem auto",
                }}
              >
                <div className="card-header bg-dark text-white text-center">
                  {exp.title}
                </div>
                <div className="card-body text-center">
                  <p className="d-flex justify-content-center">{exp.company}</p>

                  <div className="location-period d-flex justify-content-center gap-4">
                    <p className="card-text" style={{ fontSize: "0.9rem" }}>
                      <i className="fa-solid fa-location-pin"></i> {exp.location}
                    </p>
                    <p className="card-text" style={{ fontSize: "0.9rem" }}>
                      <i className="fa-solid fa-bell"></i> {exp.period}
                    </p>
                  </div>

                  <p className="card-text" style={{ fontSize: "0.9rem" }}>
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
