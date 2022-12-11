import image from '../assets/img5.jpg';
function About() {
    return(
        <section id="about">
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                    <div
                        className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full"
                    >
                        <img
                        alt="Photographie de Mathilde entourée de ses chiens."
                        src={image}
                        className="absolute inset-0 h-full w-full object-cover"
                        />
                    </div>

                    <div className="lg:py-24">
                        <h2 className="text-3xl font-bold sm:text-4xl">Bienvenue</h2>

                        <p className="mt-4 text-gray-600">Je m’appelle Mathilde, j’habite Ploumoguer et pour janvier 2023 je deviens votre toiletteuse à domicile.</p>
                        <p className="mt-4 text-gray-600">Je suis une passionnée d’animaux depuis toute petite. Depuis toujours, les chiens et les chats occupent une place privilégiée au sein de ma famille.</p>
                        <p className="mt-4 text-gray-600">Certain(e)s d’entre vous me connaisse déjà pour avoir pris soin de vous.</p>
                        <p className="mt-4 text-gray-600">Après avoir été esthéticienne pendant 8 ans, j’ai décidé de faire une reconversion professionnelle pour prendre soin de vos compagnons à quatre pattes.</p>
                        <p className="mt-4 text-gray-600">Mes compétences d’esthéticienne sont un atout pour ce métier, car j’aurai déjà cette attention particulière pour prendre soin de vos animaux, avec la même volonté de perfection que je donnais à mes prestations en esthétique.</p>
                        <p className="mt-4 text-gray-600">Diplomée d’un certificat de « toiletteur canin confirmé » auprès de l’établissement AUDRECO formation, je m’occuperai aussi bien de tous vos chiens et aussi vos chats.</p>
                        <p className="mt-4 text-gray-600">Peu importe leur gabarit, du spitz nain au Patou des pyrénées,</p>
                        <p className="mt-4 text-gray-600">Peu importe leur âge, du plus jeune au plus âgé,</p>
                        <p className="mt-4 text-gray-600">Chaque animal a le droit d’être dorloté, et pour cela, je m’adapte à leur personnalité, à leur environnement, pour un toilettage réalisé avec un animal serein.</p>
                        <p className="mt-4 text-gray-600">Je me déplace chez vous, avec tout le matériel nécessaire pour toiletter votre compagnon dans les meilleures conditions qu’il soit.</p>
                    </div>
                </div>
            </div>
        </section>

    )
};

export default About;