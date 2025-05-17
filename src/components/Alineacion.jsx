import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import "../styles/AutosCubiertas.css";

const Alineacion = () => {
     useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  
  (
    
  <>
    <Helmet>
      <title>Servicio de Alineación en Encarnación | Appel Neumáticos Showroom</title>
      <meta name="description" content="Alineación profesional para autos, camionetas y pickups. Mejora el rendimiento y la seguridad de tu vehículo con Appel Neumáticos." />
    </Helmet>

<span className="badge">Alta Tecnología en Cubiertas</span>
    <section className="autos-cubiertas">
      <h1>Servicio de Alineación</h1>
      <p>
        En <strong>Appel Neumáticos Showroom</strong>, ofrecemos un servicio de alineación de alta precisión para todo tipo de vehículos. Una correcta alineación garantiza una conducción segura, reduce el desgaste de los neumáticos y mejora la eficiencia del combustible.
      </p>

      <h2>¿Por qué es importante la alineación?</h2>
      <ul>
        <li><strong>Seguridad:</strong> Evita desviaciones y mejora el control del vehículo.</li>
        <li><strong>Economía:</strong> Reduce el consumo de combustible y el desgaste irregular de los neumáticos.</li>
        <li><strong>Confort:</strong> Proporciona una conducción más suave y estable.</li>
      </ul>

      <h2>¿Cuándo realizar una alineación?</h2>
      <ul>
        <li>Después de cambiar neumáticos o llantas.</li>
        <li>Si el vehículo tira hacia un lado al conducir.</li>
        <li>Tras impactos fuertes, como baches o accidentes.</li>
        <li>Periódicamente, como parte del mantenimiento preventivo.</li>
      </ul>

      <p>
        Nuestro equipo utiliza tecnología avanzada para asegurar una alineación precisa y eficiente. <strong>¡Confía en nosotros para mantener tu vehículo en óptimas condiciones!</strong>
      </p>
    </section>
  </>
);};

export default Alineacion;
