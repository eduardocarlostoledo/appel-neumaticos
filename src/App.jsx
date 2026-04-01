import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "../src/styles/App.css";

// Páginas principales
import Hero from "./components/Hero";
import HeroCTA from "./components/HeroCTA";
import Services from "./components/Services";
import Location from "./components/Location";
import BrandsSection from "./components/BrandsSection";
import VehiculosCards from "./components/Vehiculoscards";
import AboutUs from "./components/AboutUs";
import AccesoriosCard from "./components/AccesoriosCard.jsx";
import FAQ from "./components/FAQ.jsx";
import HorarioLocal from "./components/HorarioLocal.jsx";

// Secciones específicas
import AutosCubiertas from "./components/AutosCubiertas.jsx";
import MotosCubiertas from "./components/MotosCubiertas.jsx";
import CamionetaCubiertas from "./components/CamionetaCubiertas.jsx";
import AboutUsPage from "./components/AboutUsPage.jsx";
import Contact from "./components/Contact.jsx";
import SeoSections from "./components/SeoSections";
import ProductDetail from "./components/ProductDetail.jsx";
import Balanceo from "./components/Balanceo.jsx";
import MarcasCubiertas from "./components/MarcasCubiertas.jsx";
import Sucursales from "./components/Sucursales.jsx";
import PrivacyPolicy from "./components/PrivacyPolicy.jsx";

// Guías y artículos
import GuiasIndex from "./components/GuiasIndex.jsx";
import ComoElegirMotoAlta from "./components/guias/ComoElegirMotoAlta.jsx";
import MichelinVsPirelli from "./components/guias/MichelinVsPirelli.jsx";

// Landing clientes argentinos
import ArgentinosPage from "./components/ArgentinosPage.jsx";

// Páginas de marca
import MichelinPage from "./components/MichelinPage.jsx";
import PirelliPage from "./components/PirelliPage.jsx";
import BridgestonePage from "./components/BridgestonePage.jsx";

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
    <Hero />
    <AccesoriosCard />
    
    <HorarioLocal />
    <HeroCTA />
    
    <VehiculosCards />
    <BrandsSection />
    <Services />
    <AboutUs />
    
    <Location />
    <FAQ />
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

          {/* Servicios */}
          <Route path="/servicios/balanceo" element={<Balanceo />} />

          {/* Marcas */}
          <Route
            path="/marcas-appel-neumaticos-showroom"
            element={<MarcasCubiertas />}
          />
          <Route path="/marcas/michelin" element={<MichelinPage />} />
          <Route path="/marcas/pirelli" element={<PirelliPage />} />
          <Route path="/marcas/bridgestone" element={<BridgestonePage />} />

          {/* Guías y artículos */}
          <Route path="/guias" element={<GuiasIndex />} />
          <Route
            path="/guias/como-elegir-cubierta-moto-alta-cilindrada"
            element={<ComoElegirMotoAlta />}
          />
          <Route
            path="/guias/michelin-vs-pirelli-diferencias"
            element={<MichelinVsPirelli />}
          />

          {/* Landing argentinos */}
          <Route
            path="/neumaticos-para-argentinos"
            element={<ArgentinosPage />}
          />

          {/* Info */}
          <Route path="/sucursales" element={<Sucursales />} />
          <Route path="/quienes-somos" element={<AboutUsPage />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/politica-de-privacidad" element={<PrivacyPolicy />} />

          {/* Productos dinámicos */}
          <Route path="/productos/:slug" element={<ProductDetail />} />

          {/* Ruta 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <SeoSections />
      <Footer />
    </>
  );
};

export default App;

