import "../../styles/PricingSection.css"; // Asegúrate de que la ruta sea correcta


export const PricingSection = () => (
  <section 
    className="pricing"
    itemScope
    itemType="https://schema.org/OfferCatalog"
  >
    <h2 itemProp="name">Neumáticos Premium al <span itemProp="price">Mejor Precio</span></h2>
    
    <div className="price-highlights">
      <div 
        className="highlight"
        itemScope
        itemType="https://schema.org/Offer"
      >
        <span>💳</span>
        <p itemProp="description">Financiación directa <meta itemProp="priceCurrency" content="PYG"/></p>
      </div>
      
      <div 
        className="highlight"
        itemScope
        itemType="https://schema.org/DeliveryChargeSpecification"
      >
        <span>🚚</span>
        <p itemProp="description">Envíos a <span itemProp="eligibleRegion">todo Paraguay</span></p>
      </div>
    </div>

    {/* Microdatos ocultos */}
    <div hidden>
      <link itemProp="url" href="https://www.appelneumaticos.com#ofertas" />
      <meta itemProp="availability" content="InStock" />
    </div>
  </section>
);