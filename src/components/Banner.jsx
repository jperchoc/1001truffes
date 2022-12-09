function Banner() {
  return (
    <section id="banner" className="relative bg-[url('./assets/img1.jpg')] bg-cover bg-center bg-no-repeat">
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
            Avec 1001 Truffes, prenez rendez-vous pour un toilettage à domicile de votre chien ou de votre chat.
          </p>

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
