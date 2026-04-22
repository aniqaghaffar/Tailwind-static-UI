
import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedCities from './components/FeaturedCities';
import Services from './components/Services';
import Reviews from "./components/Reviews";
import PartnerBar from './components/PartnerBar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
       <FeaturedCities /> 
       <Services /> 
       <Reviews />
       <PartnerBar />
       <Footer/>
    </>
  )
}

export default App