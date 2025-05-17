import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "../src/styles/App.css";

// Páginas principales
import Hero from "./components/Hero";
import Services from "./components/Services";
import Location from "./components/Location";
import BrandsSection from "./components/BrandsSection";
import VehiculosCards from "./components/Vehiculoscards";
import AboutUs from "./components/AboutUs";
import AccesoriosCard from "./components/AccesoriosCard.jsx";
// Secciones específicas
import AutosCubiertas from "./components/AutosCubiertas.jsx";
import MotosCubiertas from "./components/MotosCubiertas.jsx";
import CamionetaCubiertas from "./components/CamionetaCubiertas.jsx";
//import Alineacion from "./components/Alineacion.jsx";
import AboutUsPage from "./components/AboutUsPage.jsx";
import Contact from "./components/Contact.jsx";
import SeoSections from "./components/SeoSections";
import ProductDetail from "./components/ProductDetail.jsx";
import Balanceo from "./components/Balanceo.jsx";
import MarcasCubiertas from "./components/MarcasCubiertas.jsx";
import Sucursales from "./components/Sucursales.jsx";

// Opcional: página 404
const NotFound = () => (
  <div style={{ padding: "2rem", textAlign: "center" }}>
    <h1>404 - Página no encontrada</h1>
    <p>La URL ingresada no existe en nuestro sitio.</p>
  </div>
);

// Home
const HomePage = () => (
  <>
    
    <AccesoriosCard/>
    <VehiculosCards />
    <BrandsSection />
    <Services />
    <AboutUs />
    <Hero />
    <Location />
  </>
);

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          {/* Ruta principal */}
          <Route path="/" element={<HomePage />} />
          {/* Rutas de categorías */}
          <Route path="/autos/cubiertas" element={<AutosCubiertas />} />
          <Route path="/motos/cubiertas" element={<MotosCubiertas />} />
          <Route
            path="/camioneta-pickup/cubiertas"
            element={<CamionetaCubiertas />}
          />
          {/* <Route path="/servicios/alineacion" element={<Alineacion />} /> */}
          <Route path="/servicios/balanceo" element={<Balanceo />} />
          <Route path="/marcas-appel-neumaticos-showroom" element={<MarcasCubiertas/>}/>
          <Route path="/sucursales" element={<Sucursales/>}/>
          <Route path="/quienes-somos" element={<AboutUsPage />} />
          <Route path="/contacto" element={<Contact />} />
<Route path="/productos/:slug" element={<ProductDetail />} />

          {/* Ruta 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
        <SeoSections /> {/* 🔥 Sección SEO ahora fuera del footer */}
      <Footer />
    </>
  );
};

export default App;
