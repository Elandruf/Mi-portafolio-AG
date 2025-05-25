import React from "react";
import emailjs from "emailjs-com";

const Contact = () => {
    const sendEmail = (e) => {
        e.prevendDefault();

        emailjs.sendForm(
            'service_mtm7hwq',
            'template_dzm0wa2',
            e.target,
            'Q119G8mfzOOtHtjJf'
        ).then(
            (result) => {
                alert("Mensaje enviado con exito!");
            },
            (error) => {
                alert("Error enviando el mensaje")
            }
        )
        e.target.reset()
    }

    return (
        <div className="container-contact">
            <h2 className="text-center mb-4">Contáctame</h2>
            <form onSubmit={sendEmail} className="mx-auto" style={{ maxWidth: "600px" }}>
                <p className="mb-3">¿Tienes un proyecto o quieres trabajar conmigo? ¡Házmelo saber!</p>

                <input
                    type="text"
                    name="user_name"
                    placeholder="Tu nombre"
                    className="form-control mb-3"
                    required
                />
                <input
                    type="email"
                    name="user_email"
                    placeholder="Tu correo"
                    className="form-control mb-3"
                    required
                />
                <textarea
                    name="message"
                    placeholder="Tu mensaje"
                    className="form-control mb-3"
                    rows="5"
                    required
                ></textarea>
                <button type="submit" className="btn btn-dark w-100">Enviar</button>

                <div className="text-center mt-3">
                    <p>O si prefieres:</p>
                    <a
                        href="https://wa.me/521XXXXXXXXXX?text=Hola%20Elandruf,%20vi%20tu%20portafolio%20y%20me%20interesa%20contactarte"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-success"
                    >
                        <i className="fa-brands fa-whatsapp me-2"></i>Escríbeme por WhatsApp
                    </a>
                </div>
            </form>
        </div>
    );
}

export default Contact;