import React from "react";

const Footer = () => (
	<footer className="bg-white border-top pt-5 pb-4 mt-1">
		<div className="container">
			<div className="row justify-content-between">
				<div className="col-md-4 mb-4">
					<h5 className="fw-bold">Sobre mí</h5>
					<p className="text-muted">Desarrollador full stack apasionado por crear experiencias digitales funcionales y con propósito.</p>
				</div>
				<div className="col-md-4 mb-4">
					<h5 className="fw-bold">Redes</h5>
					<ul className="list-unstyled">
						<li><a href="https://github.com/Elandruf" className="text-muted text-decoration-none" target="_blank">GitHub</a></li>
						<li><a href="https://www.linkedin.com/in/andres-garcia-a0219433b/" className="text-muted text-decoration-none" target="_blank">LinkedIn</a></li>
					</ul>
				</div>
			</div>

			<div className="text-center border-top pt-3 mt-4">
				<p className="mb-0 text-dark">&copy; 2025 Andres Eduardo Garcia. Todos los derechos reservados.</p>
			</div>
		</div>
	</footer>


);

export default Footer;