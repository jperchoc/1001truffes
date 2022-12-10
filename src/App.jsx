import './App.css'
import Header from './components/Header';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Prestations from './components/Prestations';
import Testimonials from './components/Testimonials';
import About from './components/About';

function App() {
  return (
    <>
      <Header id="top"/>
      <Banner />
      <About />
      <Prestations />
      <Testimonials />
      <Footer />
      <a
          class="fixed hidden lg:block right-16 bottom-16 rounded-full border border-indigo-600 p-3 text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
          href="#top"
        >
          <span class="sr-only"> Download </span>

          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            class="w-4 h-4"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
            ></path>
          </svg>
        </a>
    </>
    
  )
}

export default App
