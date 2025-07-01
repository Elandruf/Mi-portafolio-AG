import React from "react";
import technologies from '../data/technologies.json';
import { useTranslation } from "react-i18next";


const About = () => {

    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="about-container d-flex flex-column flex-md-row w-100 p-4 gap-4">
            <div className="right-side-about col-md-6" style={{ marginTop: "60px", margin: "2rem auto" }}>
                <h1 className="fw-bold mb-3 d-flex justify-content-center">{t("techs")}</h1>
                <div className="d-flex flex-wrap justify-content-center gap-3" style={{ marginTop: "70px" }}>
                    {technologies.map((technologie) => (
                        <span
                            key={technologie.id}
                            className={`badge bg-${technologie.color} px-3 py-2 fs-6 shadow`}
                        >
                            {technologie.name}
                        </span>
                    ))}
                </div>

                <hr />


                <strong>
                    <p className="" style={{ color: "black" }}>
                        {t("about_me")}
                    </p>
                </strong>
            </div>
        </div>

    )
}
export default About;