import { Routes, Route } from 'react-router-dom';
import Navbar from "../src/components/Navbar";
import Hero from "../src/components/Hero";
import Services from "../src/components/Services";
import Location from "../src/components/Location";
import Footer from "../src/components/Footer";
import BrandsSection from "../src/components/BrandsSection";
import VehiculosCards from "../src/components/Vehiculoscards";
import AboutUs from "../src/components/AboutUs";
import "../src/styles/App.css";
import AutosCubiertas from "./components/AutosCubiertas.jsx";
import MotosCubiertas from "../src/components/MotosCubiertas.jsx";
import CamionetaCubiertas from "../src/components/CamionetaCubiertas.jsx";


// Páginas
const HomePage = () => (
  <>
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
          <Route path="/" element={<HomePage />} />
          <Route path="/autos/cubiertas" element={<AutosCubiertas />} />
          <Route path="/motos/cubiertas" element={<MotosCubiertas />} />
          <Route path="/camioneta-pickup/cubiertas" element={<CamionetaCubiertas />} />
          {/* futuras rutas */}
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
