import Navbar from './components/NavBar';
import Hero from './components/Hero';
import Services from './components/Services';
import Location from './components/Location';
import Footer from './components/Footer';
import BrandsSection from './components/BrandsSection';
import './App.css';


const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <BrandsSection/>
      <Services />
      <Location />
      <Footer />
    </>
  );
};

export default App;