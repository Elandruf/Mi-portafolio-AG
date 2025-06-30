from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import smtplib
from email.message import EmailMessage
from dotenv import load_dotenv
import os

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://shiny-enigma-97q6744wxjw4fp9v5-8000.app.github.dev/"],  # Cambiado para React local
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Contacto(BaseModel):
    nombre: str
    email: str
    mensaje: str


@app.get("/")
def root():
    return {"message": "API funcionando, usa /contact para enviar mensajes"}



@app.post("/contact")
def enviar_mensaje(contacto: Contacto):
    msg = EmailMessage()
    msg['Subject'] = f"Nuevo mensaje de {contacto.nombre}"
    msg['From'] = contacto.email
    msg['To'] = os.getenv("EMAIL_USER")
    msg.set_content(f"""
Nombre: {contacto.nombre}
Email: {contacto.email}
Mensaje:
{contacto.mensaje}
""")
    try:
        with smtplib.SMTP_SSL("smtp.gmail.com", 465) as smtp:
            smtp.login(os.getenv("EMAIL_USER"), os.getenv("EMAIL_PASS"))
            smtp.send_message(msg)  # corregido aquí
        return {"success": True, "message": "Enviado correctamente"}
    except Exception as e:
        print("Ha ocurrido un error al enviar el correo:", e)
        return {"success": False, "message": "Ha habido un problema al enviar el correo."}
