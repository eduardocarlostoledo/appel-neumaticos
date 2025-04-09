import { HelmetProvider } from 'react-helmet-async';

import Navbar from './components/NavBar';
import Hero from './components/Hero';
import Services from './components/Services';
import Location from './components/Location';
import Footer from './components/Footer';
import BrandsSection from './components/BrandsSection';
import VehiculosCards from './components/VehiculosCards';
import AboutUs from './components/AboutUs';
import { motion } from 'framer-motion';
import './App.css';


const App = () => {
  return (
    <HelmetProvider>
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
    </HelmetProvider>
  );
};

export default App;