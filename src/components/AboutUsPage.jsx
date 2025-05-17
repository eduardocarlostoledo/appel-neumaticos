import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import "../styles/AutosCubiertas.css";

const AboutUsPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Helmet>
        <title>Quiénes Somos | Appel Neumáticos Showroom</title>
        <meta
          name="description"
          content="Conocé la historia y valores de Appel Neumáticos Showroom en Encarnación, Paraguay. Comprometidos con la calidad y el servicio."
        />
      </Helmet>

      <span className="badge">Alta Tecnología en Cubiertas</span>
      <section className="autos-cubiertas">
        <h1>Quiénes Somos</h1>
        <p>
          <strong>Appel Neumáticos Showroom</strong> es una empresa familiar ubicada
          en Encarnación, Paraguay, dedicada a la venta de neumáticos de las
          principales marcas como Pirelli, Michelin y Bridgestone. Estamos situados
          a 300 metros de la aduana internacional, facilitando el acceso a nuestros
          clientes locales y extranjeros.
        </p>

        <h2>Nuestra Misión</h2>
        <p>
          Brindar productos y servicios de alta calidad que garanticen la seguridad
          y satisfacción de nuestros clientes, ofreciendo asesoramiento
          personalizado y soluciones a medida.
        </p>

        <h2>Nuestros Valores</h2>
        <ul>
          <li><strong>Compromiso:</strong> Con la calidad y la satisfacción del cliente.</li>
          <li><strong>Integridad:</strong> Actuamos con honestidad y transparencia.</li>
          <li><strong>Innovación:</strong> Buscamos constantemente mejorar nuestros servicios.</li>
          <li><strong>Responsabilidad:</strong> Con nuestros clientes y la comunidad.</li>
        </ul>

        <p>
          Con años de experiencia en el rubro, nos hemos consolidado como una opción
          confiable para quienes buscan neumáticos y servicios de gomería en la región.{" "}
          <strong>¡Te invitamos a conocernos y ser parte de nuestra comunidad!</strong>
        </p>
      </section>
    </>
  );
};


export default AboutUsPage;
