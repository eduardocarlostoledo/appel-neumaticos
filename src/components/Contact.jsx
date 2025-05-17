import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import "../styles/AutosCubiertas.css";

const Contact = () => {
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []); (
    
  <>
    <Helmet>
      <title>Contacto | Appel Neumáticos Showroom</title>
      <meta name="description" content="Contactá con Appel Neumáticos Showroom en Encarnación, Paraguay. Estamos para ayudarte con tus consultas y necesidades." />
    </Helmet>

<span className="badge">Alta Tecnología en Cubiertas</span>
    <section className="autos-cubiertas">
      <h1>Contacto</h1>
      <p>
        ¿Tenés consultas o necesitás asesoramiento? En <strong>Appel Neumáticos Showroom</strong> estamos para ayudarte.
      </p>

      <h2>Datos de Contacto</h2>
      <ul>
        <li><strong>Teléfono:</strong> <a href="tel:+595982706757">+595 982 706 757</a></li>
        <li><strong>WhatsApp:</strong> <a href="https://wa.me/595982706757" target="_blank" rel="noopener noreferrer">+595 982 706 757</a></li>
        <li><strong>Dirección:</strong> Av. San Roque González c/ San José, Encarnación, Paraguay</li>
        <li><strong>Horarios:</strong> Lunes a Sábado de 05:45 a 17:30, Domingo de 07:00 a 12:00</li>
      </ul>

      <h2>Envíos a Todo el País</h2>
      <p>
        Realizamos envíos a todo Paraguay. Consultá por disponibilidad y costos según tu ubicación.
      </p>

      <p>
        <strong>¡Esperamos tu contacto!</strong>
      </p>
    </section>
  </>
);
};
export default Contact;
