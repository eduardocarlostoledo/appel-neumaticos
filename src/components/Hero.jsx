import "../../src/styles/Hero.css";
const Hero = () => {
    return (
      <section className="hero" id="inicio">
        <div className="container-hero">
          {/* <h1>Sólo Calidad!</h1> */}
          {/* <p className="subtitle">Venta • Cambio • Asesoramiento</p> */}
          <div className="cta-container">
            
            <a href="#ubicacion" className="cta secondary">📍 Cómo Llegar</a>
          </div>
        </div>
      </section>
    );
  };
  
  export default Hero;