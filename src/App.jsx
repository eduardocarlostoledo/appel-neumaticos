import Navbar from '../src/components/Navbar';
import Hero from '../src/components/Hero';
import Services from '../src/components/Services';
import Location from '../src/components/Location';
import Footer from '../src/components/Footer';
import BrandsSection from '../src/components/BrandsSection';
import VehiculosCards from '../src/components/Vehiculoscards';
import AboutUs from '../src/components/AboutUs';
import { motion } from 'framer-motion';
import '../src/styles/App.css';


const App = () => {
  return (
    <>
      <Navbar />
      
      <VehiculosCards/>
      <BrandsSection/>
      <Services />
      
      <AboutUs/>
      <Hero />
      <Location />
      <Footer />
    </>
  );
};

export default App;