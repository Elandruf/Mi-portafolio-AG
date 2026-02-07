import React from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";



const Footer = () => {

	const [t, i18n] = useTranslation();

	const changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
	}
	return (

		<footer className=" border-top pt-5 pb-4 mt-1">
			<div className="container">
				<div className="row justify-content-between">
					<div className="col-md-4 mb-4">
						<h5 className="fw-bold text-black">{t("sobremi")}</h5>
						<strong><p className="text-black">+34 632-291-387</p></strong>
						<strong><p className="text-black">andreseduardo2710@gmail.com</p></strong>
					
					</div>
					<div className="col-md-4 mb-4">
						<h5 className="fw-bold text-black">{t("social")}</h5>
						<ul className="list-unstyled">
							<li><a href="https://github.com/Elandruf" className=" text-decoration-none" target="_blank" style={{color:"black"}}>GitHub</a></li>
							<li><a href="https://www.linkedin.com/in/andres-garcia-a0219433b/" className=" text-decoration-none" target="_blank" style={{color:"black"}}>LinkedIn</a></li>
						</ul>
					</div>
				</div>

				<div className="text-center border-top pt-3 mt-4 justify-content-center d-flex">
					<p className="mb-0 text-black">&copy; 2025 Andres Eduardo Garcia.</p>
				</div>
			</div>
		</footer>


	);
}
export default Footer;