import "../../src/styles/Services.css";

// Importar imágenes dinámicamente con Vite
const images = import.meta.glob("../images/prod*.jpg", { eager: true });

const Services = () => {
  return (
    <section className="services" id="productos">
      <div className="container">
      <h2>Venta de Neumáticos y Cubiertas para Autos, Motos y Camionetas</h2>
<p className="services-description">
  En Appel Neumáticos contamos con un amplio catálogo de cubiertas para todo tipo de vehículos. Elegí entre las mejores marcas para tu auto, moto o camioneta.
</p>


        <div className="grid">
          {/* Mostrar las imágenes */}
          {Object.values(images).map((image, index) => (
            <div className="card" key={index}>
              <img loading="lazy"src={image.default} alt={`Cubierta de neumático ${index + 1} - Appel Neumáticos Showroom Encarnación`}
 />
              {/* <h3>Producto {index + 1}</h3> */}
              {/* <p>Cubiertas Autos y Moto {index + 1}</p> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;