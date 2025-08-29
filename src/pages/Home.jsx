import React from "react";
import i18n from "../i18n";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";


const Home = () => {
	const navigate = useNavigate();
	const [ t, i18n0 ]= useTranslation()
	const changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
	}
	return (
		<div className="home-container w-100">
			<div className="text-center">
				<h1 className="display-4 fw-bold">{t("title")} </h1>
				<p className="lead mt-3">{t("welcome_message")}</p>
				{/*<button className="project-button"onClick={()=>navigate("/projects")}>{t("navbar.projects")}</button>*/}
			</div>
		</div>
	);
};

export default Home;