import {AiFillStar, AiOutlineStar } from 'react-icons/ai';
import stella from '../assets/stella.jpg';

const imgWoman2 = "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
const imgWoman3 = "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";
function Testimonials() {
    return (
<section id="testimonials" className="bg-white">
  <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
    <div className="mx-auto max-w-xl text-center">
      <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
        Quelques avis
      </h2>

      <p className="text-gring-offset-warm-gray-500 mx-auto mt-4 max-w-lg">
        Vous trouverez ci-dessous quelques avis...
      </p>
    </div>

    <div
      className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-1 sm:gap-16 lg:grid-cols-1"
    >
      <Testimonial img={stella} imgAlt="Photographie de Stella, chien Westie toiléttée par Mathilde." ratings={5} name="Bruno" infos="Propriétaire de Stella">
      Je remercie Mathilde pour sa douceur,sa patience et son professionnalisme. Stella est très belle après sa séance de toilettage par épilation et sans stress. Mathilde est une personne très passionnée par son métier. Stella adore ses rdv avec Mathilde. 
      </Testimonial>
    </div>
  </div>
</section>
    )
}

function Testimonial({img, imgAlt, name, infos, ratings, children}) {
  return (
    <div>
        <img
          alt={imgAlt}
          src={img}
          className="mx-auto h-24 w-24 rounded-full object-cover shadow-xl"
        />

        <blockquote
          className="-mt-6 flex flex-col justify-between rounded-lg p-12 text-center shadow-xl"
        >
          <p className="text-lg font-bold text-gray-700">{name}</p>
          <p className="mt-1 text-xs font-medium text-gray-500">{infos}</p>
          <p className="mt-4 text-sm text-gray-500">{children}</p>

          <div className="mt-8 flex justify-center gap-0.5 text-green-500">
            {
              [...Array(5)].map((_, i) => 
                  ratings > i ? <AiFillStar key={i} /> : <AiOutlineStar key={i}/>
              )
            }
          </div>
        </blockquote>
      </div>
  );
}
export default Testimonials;