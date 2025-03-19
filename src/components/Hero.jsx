import "./styles/Hero.css";
const Hero = () => {
    return (
      <section className="hero">
        <div className="container">
          <h1>Tu Especialista en Neumáticos en Encarnación</h1>
          <p className="subtitle">Venta • Cambio • Asesoramiento</p>
          <div className="cta-container">
            <a href="#contacto" className="cta">📞 Contactar Ahora</a>
            <a href="#ubicacion" className="cta secondary">📍 Cómo Llegar</a>
          </div>
        </div>
      </section>
    );
  };
  
  export default Hero;