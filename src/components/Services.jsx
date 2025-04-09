import "./styles/Services.css";

// Importar imágenes dinámicamente con Vite
const images = import.meta.glob("../images/prod*.jpg", { eager: true });

const Services = () => {
  return (
    <section className="services" id="productos">
      <div className="container">
        <h2>Nuestros Productos</h2>
        <div className="grid">
          {/* Mostrar las imágenes */}
          {Object.values(images).map((image, index) => (
            <div className="card" key={index}>
              <img src={image.default} alt={`Neumatico Cubierta Appel neumatico showroom  ${index + 1}`} />
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