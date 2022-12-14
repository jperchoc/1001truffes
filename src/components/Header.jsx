import { useState } from "react";
import logo from '../assets/logo.png';

import { MdMail, MdLocalPhone } from 'react-icons/md';

function Header() {

  const [showMenu, setShowMenu] = useState(false);

    return (
    <>
        <header aria-label="Site Header" className="bg-white">
        <div
        className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8"
        >
        <a className="block text-teal-600" href="/">
            <span className="sr-only">Home</span>
            <img src={logo} className="h-16 w-16" alt="Logo de 1001 truffes."/>
        </a>

        <div className="flex flex-1 items-center justify-end md:justify-between">
            <nav aria-label="Site Nav" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
                <li>
                <a className="text-gray-500 transition hover:text-gray-500/75" href="#about">
                    A propos
                </a>
                </li>

                <li>
                <a className="text-gray-500 transition hover:text-gray-500/75" href="#prestations">
                    Prestations
                </a>
                </li>

                <li>
                <a className="text-gray-500 transition hover:text-gray-500/75" href="#testimonials">
                    Avis
                </a>
                </li>

                <li>
                <a className="text-gray-500 transition hover:text-gray-500/75" href="#contact">
                    Contacter
                </a>
                </li>

            </ul>
            </nav>

            <div className="flex items-center gap-4">
            <div className="flex gap-2 sm:gap-4">
           
                <a
                href="mailto:1001truffes.toilettage@gmail.com"
                className="block rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-600/75"
                >
                    <MdMail />
                </a>

                <a
                href="tel:+33764889923"
                className="block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
                >
                    <MdLocalPhone />
                </a>
            </div>

            <button
                className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
                onClick={e => setShowMenu(true)}
            >
                <span className="sr-only">Toggle menu</span>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                />
                </svg>
            </button>
            </div>
        </div>
        </div>
        </header>
        {showMenu && <MobileMenu onClose={e => setShowMenu(false)}/>}
    </>
    );
}

function MobileMenu({onClose}) {
    return (
        <section className="fixed inset-y-0 right-0 z-50 flex">
        <div className="w-screen max-w-sm">
            <div className="flex h-full flex-col divide-y divide-gray-200 bg-gray-50">
            <div className="overflow-y-scroll">
                <header className="flex h-16 items-center justify-between pl-6">
                <span className="text-sm font-medium uppercase tracking-widest">
                    Menu
                </span>

                <button
                    aria-label="Close menu"
                    className="h-16 w-16 border-l border-gray-200"
                    type="button"
                    onClick={e => onClose()}
                >
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-auto h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                    />
                    </svg>
                </button>
                </header>

                <nav
                className="flex flex-col divide-y divide-gray-200 border-t border-b border-gray-200 text-sm font-medium text-gray-500"
                >
                <a 
                    onClick={e => onClose()} href="#about" className="px-6 py-3"> A propos </a>
                <a 
                    onClick={e => onClose()} href="#prestations" className="px-6 py-3"> Prestations </a>
                <a 
                    onClick={e => onClose()} href="#testimonials" className="px-6 py-3"> Avis </a>
                <a 
                    onClick={e => onClose()} href="#contact" className="px-6 py-3"> Contacter </a>
               
                </nav>
            </div>
            </div>
        </div>
        </section>
    )
}

export default Header;
