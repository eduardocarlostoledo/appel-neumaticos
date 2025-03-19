import "./styles/Location.css";
const Location = () => {
    return (
      <section className="location" id="ubicacion">
        <div className="container">
          <h2>¿Dónde Estamos?</h2>
          <div className="map-container">
            <iframe 
              title="Ubicación"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.956340656207!2d-55.95252368494084!3d-27.32526948289173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDE5JzI1LjAiUyA1NcKwNTYnNDkuNyJX!5e0!3m2!1ses!2spy!4v1686346788159!5m2!1ses!2spy"
              style={{border:0}}
              allowFullScreen
              loading="lazy">
            </iframe>
          </div>
          <div className="address">
            <p>📍 J4RX+PQ9 Encarnación, Paraguay</p>
            <p>Rotonda Ruta Internacional - 300mt de la aduana internacional</p>
            <p>🚚 Enviamos a todo Paraguay y Argentina</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default Location;