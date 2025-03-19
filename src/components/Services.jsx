import "./styles/Services.css";
const Services = () => {
    return (
      <section className="services" id="productos">
        <div className="container">
          <h2>Nuestros Productos</h2>
          <div className="grid">
            <div className="card">
              <h3>🚗 Neumáticos para Autos</h3>
              <p>Marcas premium y económicas</p>
            </div>
            <div className="card">
              <h3>🚚 Para Camionetas</h3>
              <p>Todo terreno y ciudad</p>
            </div>
            <div className="card">
              <h3>🏍️ Para Motos</h3>
              <p>Alto rendimiento</p>
            </div>
            <div className="card">
              <h3>🔋 Baterías</h3>
              <p>Diferentes marcas y amperajes</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Services;