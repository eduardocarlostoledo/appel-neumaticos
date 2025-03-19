import "./styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo y Nombre de la Empresa */}
        <div className="navbar-brand">
          <span className="logo">🛞</span>
          <h1 className="company-name">APPEL NEUMATICOS</h1>
        </div>

        {/* Menú de Navegación */}
        <ul className="navbar-menu">
          <li><a href="#inicio">INICIO</a></li>
          <li><a href="#neumaticos">NEUMÁTICOS</a></li>
          <li><a href="#productos">PRODUCTOS</a></li>
          <li><a href="#servicios">SERVICIOS</a></li>
          <li><a href="#sucursales">SUCURSALES</a></li>
          <li><a href="#acerca-de">ACERCA DE</a></li>
        </ul>

        {/* Contacto */}
        <div className="navbar-contact">
          <a href="tel:+595984679739" className="contact-link">
            📞 +595 984 679739
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;