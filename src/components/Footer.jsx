import { useState } from "react";
import Legal from "./Legal";

function Footer() {
  const [showLegal, setShowLegal] = useState(false);
  return (
    <footer aria-label="Site Footer" className="bg-white" id="contact">
      <div className="max-w-screen-xl px-4 pt-16 pb-8 mx-auto sm:px-6 lg:px-8 lg:pt-24">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-5xl">
            Contacter
          </h2>

          <p className="max-w-md mx-auto mt-4 text-gray-500">
            Je me déplace sur <strong>Ploumoguer et ses alentours</strong> afin de prendre soin de votre animal. Je dispose de mon propre matériel, seuls un accès à l'eau et à l'electricité est nécessaire.
          </p>
          <div className="text-gray-500 w-48 mx-auto mt-4">
            <div className="flex justify-between"><span>Lundi</span><span>09h00 - 18h00</span></div>
            <div className="flex justify-between"><span>Mardi</span><span>09h00 - 18h00</span></div>
            <div className="flex justify-between"><span>Mercredi</span><span>09h00 - 18h00</span></div>
            <div className="flex justify-between"><span>Jeudi</span><span>09h00 - 18h00</span></div>
            <div className="flex justify-between"><span>Vendredi</span><span>09h00 - 18h00</span></div>
          </div>
          <p className="text-gray-500 mt-4">N'hésitez pas à <strong>me contacter</strong> afin de prendre rendez-vous</p>

          <a
            href="mailto:1001truffes.toilettage@gmail.com"
            className="mr-2 inline-block px-12 py-3 mt-8 text-sm font-medium text-teal-600 border border-teal-600 rounded-full hover:bg-teal-600 hover:text-white focus:outline-none focus:ring active:bg-teal-500"
          >
            Par e-mail
          </a>
          <a
            href="tel:+33764889923"
            className="ml-2 inline-block px-12 py-3 mt-8 text-sm font-medium text-teal-600 border border-teal-600 rounded-full hover:bg-teal-600 hover:text-white focus:outline-none focus:ring active:bg-teal-500"
          >
            Par téléphone
          </a>
        </div>

        <div className="pt-8 mt-16 border-t border-gray-100 sm:flex sm:items-center sm:justify-between lg:mt-24">
          <nav aria-label="Footer Navigation - Support">
            <ul className="flex flex-wrap justify-center gap-4 text-xs lg:justify-end">
              <li>
              <span>Tous droits réservés © 1001 Truffes | {new Date().getFullYear()}</span>
              </li>
              <li>
                <button
                  className="text-gray-500 transition hover:opacity-75"
                  onClick={() => setShowLegal(true)}
                >
                  Mentions légales
                </button>
              </li>
            </ul>
          </nav>

          <ul className="flex justify-center gap-6 mt-8 sm:mt-0 lg:justify-end">
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=100085509908805"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:opacity-75"
              >
                <span className="sr-only">Facebook</span>

                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>

            <li>
              <a
                href="https://www.instagram.com/1001truffes/"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:opacity-75"
              >
                <span className="sr-only">Instagram</span>

                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Legal visible={showLegal} onClose={() => setShowLegal(false)}/>
    </footer>
  );
}

export default Footer;
