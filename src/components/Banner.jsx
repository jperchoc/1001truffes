import { useEffect, useState } from "react";
import { MdMail, MdLocalPhone } from 'react-icons/md';

const images = [
  './assets/img1.jpg',
  './assets/img2.jpg',
  './assets/img3.jpg',
  './assets/img4.jpg',
]
function Banner() {
  const [shownImageIndex, setShownImageIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setShownImageIndex((oldValue) => oldValue >= images.length -1 ? 0 : oldValue+1);
    }, 10000);
    return () => clearInterval(interval);
  }, []);
  return (
    <section id="banner" className="relative">
      {
        images.map(img => 
          <div className={`transition-opacity duration-1000 absolute bg-[url('${img}')] bg-cover bg-center bg-no-repeat inset-0 ${images[shownImageIndex] === img ? "opacity-100":"opacity-0"}`} key={img}></div>
        )
      }

      <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center sm:text-left">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Chouchoutez votre animal
            <strong className="block font-extrabold text-teal-700">
              à domicile.
            </strong>
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
            Avec 1001 Truffes, prenez rendez-vous pour un toilettage à domicile de votre chien ou de votre chat. Sur rendez-vous du lundi au samedi. 
          </p>

          <div className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
            <strong className="block font-extrabold text-teal-700 transition hover:opacity-75">
              <a 
                href="tel:+33764889923">
                <div className="flex items-center">
                  <MdLocalPhone className="mr-2"/> 
                  <span>07 64 88 99 23</span>
                </div>
              </a>
            </strong>
            <strong className="block font-extrabold text-teal-700 transition hover:opacity-75">
              <a 
                href="mailto:1001truffes.toilettage@gmail.com">
                <div className="flex items-center">
                  <MdMail className="mr-2"/> 
                  <span>1001truffes.toilettage@gmail.com</span>
                </div>
              </a>
            </strong>
            <div className="flex mt-2">
              <a
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">Facebook</span>

                  <svg
                    className="w-10 h-10"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">Instagram</span>

                  <svg
                    className="w-10 h-10"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <a
              href="#contact"
              className="block w-full rounded bg-teal-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-teal-700 focus:outline-none focus:ring active:bg-teal-500 sm:w-auto"
            >
              Contacter
            </a>

            <a
              href="#prestations"
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-teal-600 shadow hover:text-teal-700 focus:outline-none focus:ring active:text-teal-500 sm:w-auto"
            >
              Prestations
            </a>
          </div>
        </div>
      </div>

      
    </section>
  );
}
export default Banner;
