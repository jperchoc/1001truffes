<script lang="ts">
    import Testimonial from './Testimonial.svelte';
    import stella from '../assets/stella.jpg';
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
        class="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-1 sm:gap-16 lg:grid-cols-1"
      >
        <Testimonial img={stella} imgAlt="Photographie de Stella, chien Westie toiléttée par Mathilde." ratings={5} name="Bruno" infos="Propriétaire de Stella">
        Je remercie Mathilde pour sa douceur,sa patience et son professionnalisme. Stella est très belle après sa séance de toilettage par épilation et sans stress. Mathilde est une personne très passionnée par son métier. Stella adore ses rdv avec Mathilde. 
        </Testimonial>
      </div>
    </div>
  </section>