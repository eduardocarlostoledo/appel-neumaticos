import "./styles/Location.css";
const Location = () => {
    return (
      <section className="location" id="ubicacion">
        <div className="container-map">
          <h2>¿Dónde Estamos?</h2>
          <div className="google-map">


        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d885.8912351549054!2d-55.851786724189196!3d-27.35806680361256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjfCsDIxJzI5LjAiUyA1NcKwNTEnMDIuMSJX!5e0!3m2!1ses!2sar!4v1742416736106!5m2!1ses!2sar"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <div className="address">
  {/* Enlaces con SVGs */}
  <div className="social-links">
    <a href="https://wa.me/595975123030" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path fill="#25D366" d="M17.5 14.4l-2.9-1.1c-.3-.1-.6-.1-.9.1l-1.4 1.4c-1.1-.6-2.1-1.6-2.7-2.7l1.4-1.4c.2-.2.3-.6.1-.9L9.6 6.5c-.2-.5-.8-.7-1.3-.5l-2.2 1c-.5.2-.7.8-.5 1.3.8 2 2.3 4.1 4.5 6.3 2.2 2.2 4.3 3.7 6.3 4.5.5.2 1.1 0 1.3-.5l1-2.2c.2-.5 0-1.1-.5-1.3zM12 2C6.5 2 2 6.5 2 12c0 2.1.6 4.1 1.6 5.8L2 22l4.2-1.6c1.7 1 3.7 1.6 5.8 1.6 5.5 0 10-4.5 10-10S17.5 2 12 2z"/>
      </svg>
    </a>
    <a href="https://www.instagram.com/appel_neumaticos_showroom/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path fill="#E1306C" d="M12 2c2.7 0 3 0 4 .1 1 .1 1.5.2 2 .4.5.2 1 .5 1.4.9.4.4.7.9.9 1.4.2.5.3 1 .4 2 .1 1 .1 1.3.1 4 0 2.7 0 3-.1 4-.1 1-.2 1.5-.4 2-.2.5-.5 1-.9 1.4-.4.4-.9.7-1.4.9-.5.2-1 .3-2 .4-1 .1-1.3.1-4 .1-2.7 0-3 0-4-.1-1-.1-1.5-.2-2-.4-.5-.2-1-.5-1.4-.9-.4-.4-.7-.9-.9-1.4-.2-.5-.3-1-.4-2-.1-1-.1-1.3-.1-4 0-2.7 0-3 .1-4 .1-1 .2-1.5 .4-2 .2-.5 .5-1 .9-1.4.4-.4 .9-.7 1.4-.9.5-.2 1-.3 2-.4 1-.1 1.3-.1 4-.1zm0 2c-2.6 0-2.9 0-4 .1-.9.1-1.4.2-1.8.3-.4.2-.8.4-1.1.7-.3.3-.5.7-.7 1.1-.1.4-.2.9-.3 1.8-.1 1.1-.1 1.4-.1 4 0 2.6 0 2.9 .1 4 .1 .9 .2 1.4 .3 1.8 .2 .4 .4 .8 .7 1.1 .3 .3 .7 .5 1.1 .7 .4 .1 .9 .2 1.8 .3 1.1 .1 1.4 .1 4 .1 2.6 0 2.9 0 4-.1 .9-.1 1.4-.2 1.8-.3 .4-.2 .8-.4 1.1-.7 .3-.3 .5-.7 .7-1.1 .1-.4 .2-.9 .3-1.8 .1-1.1 .1-1.4 .1-4 0-2.6 0-2.9-.1-4-.1-.9-.2-1.4-.3-1.8-.2-.4-.4-.8-.7-1.1-.3-.3-.7-.5-1.1-.7-.4-.1-.9-.2-1.8-.3-1.1-.1-1.4-.1-4-.1zm0 5c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3zm0 2c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1zm4.5-5c.4 0 .7.3.7.7s-.3.7-.7.7-.7-.3-.7-.7.3-.7.7-.7z"/>
      </svg>
    </a>
    <a href="https://maps.app.goo.gl/dN9obMRMWov6Euvu5" aria-label="Maps" target="_blank" rel="noopener noreferrer">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path fill="#4285F4" d="M12 2C8.1 2 5 5.1 5 9c0 5.3 7 13 7 13s7-7.7 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5z"/>
      </svg>
    </a>
  </div>

  {/* Dirección */}
  <p>📍 J4RX+PQ9 Encarnación, Paraguay</p>
  <p>Rotonda Ruta Internacional - 300mt de la aduana internacional</p>
  <p>🚚 Enviamos a todo Paraguay y Argentina</p>
</div>
        </div>
      </section>
    );
  };
  
  export default Location;