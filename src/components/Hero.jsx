import "../../src/styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="inicio">
      <div className="container-hero">
        <div className="hero-text">
          <h1>Neumáticos de Confianza</h1>
          <p className="subtitle">Venta • Cambio • Asesoramiento • Envíos a todo Paraguay</p>
          <div className="cta-container">
            <a href="#productos" className="cta primary">🛞 Ver Productos</a>
            <a href="#ubicacion" className="cta secondary">📍 Cómo Llegar</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
