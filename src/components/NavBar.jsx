import "./styles/Navbar.css";

const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="container">
          <h1 className="logo">🛞 Appel Neumaticos</h1>
          <div className="nav-items">
            <a href="#productos">Productos</a>
            <a href="#ubicacion">Ubicación</a>
            <a href="#contacto">Contacto</a>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;