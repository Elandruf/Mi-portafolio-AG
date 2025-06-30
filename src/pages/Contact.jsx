import { t } from "i18next";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";


const Contact = () => {
  const [ t, i18n ] = useTranslation();
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(process.env.BACKEND_URL + "contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        alert("Mensaje enviado con éxito!");
        setFormData({ nombre: "", email: "", mensaje: "" });
      } else {
        alert("Error enviando el mensaje: " + data.message);
      }
    } catch (error) {
      alert("Error de red: " + error.message);
    }
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }
  return (
    <div className="container-contact">
      <h2 className="text-center mb-4">{t("contact")}</h2>
      <form onSubmit={sendEmail} className="mx-auto" style={{ maxWidth: "600px" }}>
        <p className="mb-3">{t("message")}</p>

        <input
          type="text"
          name="nombre"
          placeholder="Tu nombre"
          className="form-control mb-3"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Tu correo"
          className="form-control mb-3"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="mensaje"
          placeholder="Tu mensaje"
          className="form-control mb-3"
          rows="5"
          value={formData.mensaje}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit" className="btn btn-dark w-100">{t("send")}</button>
      </form>
    </div>
  );
};

export default Contact;
