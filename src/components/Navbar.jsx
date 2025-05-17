import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import "../../src/styles/Navbar.css";
import logo from '../images/logo.png';

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  const renderNavLink = (label, id) => {
    return isHome ? (
      <a href={`#${id}`} onClick={handleLinkClick}>{label}</a>
    ) : (
      <Link to={`/#${id}`} onClick={handleLinkClick}>{label}</Link>
    );
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Brand */}
        <div className="navbar-brand">
          <a className="logo" href="/">
            <img
              loading="lazy"
              src={logo}
              alt="Appel Neumáticos Showroom Encarnación"
              className="logo-image"
            />
          </a>
          <h1 className="company-name">APPEL NEUMÁTICOS SHOWROOM</h1>
        </div>

        {/* Menu */}
        <ul className={`navbar-menu ${menuOpen ? "show" : ""}`}>
          <li><Link to="/" onClick={handleLinkClick}>Inicio</Link></li>
          <li><Link to="/autos/cubiertas" onClick={handleLinkClick}>Autos</Link></li>
          <li><Link to="/motos/cubiertas" onClick={handleLinkClick}>Motos</Link></li>
          <li><Link to="/camioneta-pickup/cubiertas" onClick={handleLinkClick}>Camionetas</Link></li>
          <li><Link to="/marcas-appel-neumaticos-showroom" onClick={handleLinkClick}>Marcas</Link></li>
                    <li><Link to="/sucursales" onClick={handleLinkClick}>Sucursales</Link></li>
                    <li><Link to="/quienes-somos" onClick={handleLinkClick}>Acerca</Link></li>        
          
          
          
          
        </ul>

        {/* Contacto */}
        <div className="navbar-contact">
          <a href="tel:+595984679739" className="contact-link">
            📞 +595 984 679739
          </a>
        </div>

        {/* Toggle */}
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
