import './App.css'
import Header from './components/Header';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Prestations from './components/Prestations';
import Testimonials from './components/Testimonials';
import About from './components/About';
import ScrollTopButton from './components/ScrollTopButton';

function App() {
  return (
    <>
      <Header id="top"/>
      <Banner />
      <About />
      <Prestations />
      <Testimonials />
      <Footer />
      <ScrollTopButton />
    </>
    
  )
}

export default App
