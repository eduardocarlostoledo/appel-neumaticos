import "../../styles/LocalSeoSection.css"; // Asegúrate de que la ruta sea correcta


export const LocalSeoSection = () => (
  <section 
    className="local-seo"
    itemScope
    itemType="https://schema.org/AutoPartsStore"
  >
    <h2>
      <span itemProp="name">Appel Neumáticos</span> - 
      <span itemProp="addressLocality"> Encarnación</span>
    </h2>
    
    <p itemProp="description">
      Visita nuestro showroom en <span itemProp="addressRegion">Itapúa</span> o 
      <span itemProp="makesOffer"> solicita envío a todo Paraguay</span>.
    </p>

    <div 
      className="map-container"
      itemProp="hasMap"
      itemType="https://schema.org/Map"
    >
      <iframe
        title="Ubicación de Appel Neumáticos en Encarnación"
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d885.8912351549054!2d-55.851786724189196!3d-27.35806680361256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjfCsDIxJzI5LjAiUyA1NcKwNTEnMDIuMSJX!5e0!3m2!1ses!2sar!4v1742416736106!5m2!1ses!2sar"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>

    {/* Microdatos ocultos para SEO */}
    <div hidden>
      <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
        <span itemProp="streetAddress">Rotonda Ruta Internacional - 300mt de la aduana</span>,
        <span itemProp="addressLocality">Encarnación</span>,
        <span itemProp="addressRegion">Itapúa</span>,
        <span itemProp="addressCountry">Paraguay</span>
      </div>
      <meta itemProp="openingHours" content="Mo-Sa 08:00-18:00" />
      <link itemProp="url" href="https://www.appelneumaticos.com" />
    </div>
  </section>
);