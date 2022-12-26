<script lang="ts">
    import Testimonial from '../UI/Testimonial.svelte';
    import stella from '../../assets/stella.jpg';
    import iago from '../../assets/iago.jpg';
    import taiko from '../../assets/taiko.jpg';
    import grizzly from '../../assets/grizzly.jpg';
</script>

<section id="testimonials" class="bg-white">
    <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div class="mx-auto max-w-xl text-center">
        <h2 class="text-4xl font-bold tracking-tight sm:text-5xl">
          Quelques avis
        </h2>
  
        <p class="text-gring-offset-warm-gray-500 mx-auto mt-4 max-w-lg">
          Vous trouverez ci-dessous quelques avis...
        </p>
      </div>
  
      <div
        class="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-1 sm:gap-16 lg:grid-cols-2"
      >
        <Testimonial img={iago} imgAlt="Photographie de Iago, chien Finnois de Laponie toilétté par Mathilde" ratings={5} name="Justine" infos="Propriétaire de Iago">
          Professionnelle consciencieuse et très soucieuse du bien-être animal. Elle sait prendre en considération les doléances des maîtres mais aussi le caractère de chaque chien !
        </Testimonial>
        <Testimonial img={stella} imgAlt="Photographie de Stella, chien Westie toiléttée par Mathilde." ratings={5} name="Bruno" infos="Propriétaire de Stella">
        Je remercie Mathilde pour sa douceur,sa patience et son professionnalisme. Stella est très belle après sa séance de toilettage par épilation et sans stress. Mathilde est une personne très passionnée par son métier. Stella adore ses rdv avec Mathilde. 
        </Testimonial>
        <Testimonial img={taiko} imgAlt="Photographie de Taïko, Berger Allemand toilétté par Mathilde" ratings={5} name="Damien" infos="Propriétaire de Taïko">
          Je suis ravi du travail de Mathilde. Elle est très professionnelle, douce et passionnée. C'était le tout premier toilettage pour Taïko, mon jeune berger allemand. Je referais appel à ses services sans hésiter, merci !
        </Testimonial>
        <Testimonial img={grizzly} imgAlt="Photographie de Grizzly, chat à poils longs toilétté par Mathilde" ratings={5} name="Julie" infos="Propriétaire de Grizzly">
          Je remercie Mathilde, une professionnelle adorable et très patiente. J'ai retrouvé mon Grizzly tout doux, sans plus aucun paquet de poils, quel bonheur ! Un grand merci pour ton travail et tes conseils. Je recommande à 100 % 
        </Testimonial>
      </div>
    </div>
  </section>