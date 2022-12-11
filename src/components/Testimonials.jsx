import {AiFillStar, AiOutlineStar } from 'react-icons/ai'
const imgWoman1 = "https://images.unsplash.com/photo-1599566219227-2efe0c9b7f5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80";
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
      className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-16 lg:grid-cols-3"
    >
      <Testimonial img={imgWoman1} imgAlt="Photographie d'une femme" ratings={5} name="Sophie Lennon" infos="Propriétaire de TruffoMax">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio delectus officiis, mollitia voluptatibus consequatur labore.
      </Testimonial>
      <Testimonial img={imgWoman2} imgAlt="Photographie d'une femme" ratings={4} name="Aurélie Star" infos="Propriétaire de Scrougnifou">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quas eum natus nam voluptatum, animi ratione accusantium saepe, nemo iure veniam porro impedit in?
      </Testimonial>
      <Testimonial img={imgWoman3} imgAlt="Photographie d'une femme" ratings={5} name="Gwendoline Traffaouelan" infos="Propriétaire de PierreMinet">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt magnam deleniti, vero odit ad sapiente architecto optio aut? Commodi libero possimus rerum eveniet dolore perferendis fuga, cum voluptatum minima ipsam recusandae esse?
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