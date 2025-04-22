import "../../styles/VehicleTypeSection.css"; // Asegúrate de que la ruta sea correcta

export const VehicleTypeSection = () => {
  const vehicleTypes = [
    {
      name: "Autos",
      image: "/autos.jpg",
      alt: "Neumáticos y cubiertas para auto, moto y pickup en Encarnación",
      description: "Desde city cars hasta berlinas de lujo",
      price: "50000",
    },
    {
      name: "Motos",
      image: "/motos.jpg",
      alt: "Neumáticos para motos en Encarnación",
      description: "Cubiertas para scooters, naked, deportivas y más",
      price: "35000",
    },
    {
      name: "Camionetas / Pickups",
      image: "/pickup.jpg",
      alt: "Cubiertas para pickups y camionetas en Encarnación",
      description: "Tracción, carga y durabilidad para todos los caminos",
      price: "70000",
    },
  ];

  return (
    <section 
      className="vehicle-types"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <h2>Neumáticos para <span itemProp="name">Todo Tipo de Vehículo</span></h2>
      
      <div 
        className="vehicle-grid"
        itemProp="itemListElement"
      >
        {vehicleTypes.map((vehicle, index) => (
          <div 
            key={vehicle.name}
            className="vehicle-card"
            itemProp="item"
            itemScope
            itemType="https://schema.org/Product"
          >
            <img
              loading="lazy"
              src={vehicle.image}
              alt={vehicle.alt}
              width="300"
              height="200"
              itemProp="image"
            />
            <h3 itemProp="name">Para {vehicle.name}</h3>
            <p itemProp="description">{vehicle.description}</p>

            {/* Schema.org Offer */}
            <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
              <meta itemProp="priceCurrency" content="ARS" />
              <meta itemProp="price" content={vehicle.price} />
              <link itemProp="availability" href="https://schema.org/InStock" />
            </div>

            <meta itemProp="position" content={index + 1} />
          </div>
        ))}
      </div>
    </section>
  );
};
