<script setup>
import Tecnologie from '../components/tecnologie.vue';
import Certificaciones from '../components/Certificaciones.vue';
import Educacion from '../components/Educacion.vue';
import { certificaciones } from '../data/certificaciones.js'
import { cursos } from '../data/cursos.js'
import { tecnologies } from '../data/tecnologies.js'
import { onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import AOS from 'aos'


onMounted(() => {
  AOS.init()
})



</script>

<template>
  <main class="p-4 relative">
    <section class="grid grid-cols-1 gap-10 place-items-center p-6 lg:flex lg:gap-0 justify-between items-center mt-20">
      <article data-aos="fade-left" class="space-y-10 order-last">
        <h1 class="text-4xl text-white font-bold">Mi Nombre es Wilmer Lopez</h1>
        <h3 class="text-2xl text-sky-500 font-bold">Front-End Developer (Stack MEVN)</h3>

        <h5 class="bg-sky-700 text-white italic font-bold rounded-lg text-xl p-4 hover:bg-sky-900 hover:text-gray-300 transition">Experiencia en proyectos Full Stacks con VueJs</h5>

        <div class="flex gap-5">
          <a class="bg-sky-900 text-white border border-sky-400 p-2 rounded-lg font-extrabold hover:bg-sky-600 hover:text-gray-300 transition" href="https://www.linkedin.com/in/wilmer-lopez-b356a8122/" target="_blank"> Linkedin</a>
          <RouterLink class="bg-sky-900 text-white border border-sky-400 p-2 rounded-lg font-extrabold hover:bg-sky-600 hover:text-gray-300 transition" to="contact" >Contactar</RouterLink>
        </div>
      </article>

      <article data-aos="fade-right" class="order-first">
        <img
        
        class="rounded-full h-96 w-96 bg-transparent border border-sky-400 hover:border-sky-600 shadow-lg"
        alt="logo"
        >
      </article>
    </section>

    <section class="grid grid-cols-1 place-items-center lg:flex justify-between p-4 items items-center gap-10 text-left">
      <article data-aos="fade-up" class="text-white font-medium text-xl space-y-5 lg:w-4/6">
        <h1 class="text-2xl font-bold text-center italic">Tecnologias que Domino</h1>
        <p>Poseo una sólida experiencia en el desarrollo Front-End, centrándome en tecnologías como Vue.js y frameworks relacionados. Mi enfoque en JavaScript y TypeScript me ha permitido construir interfaces de usuario robustas y altamente interactivas. Además, tengo experiencia en el desarrollo de aplicaciones Full-Stack, utilizando Node.js y Express para crear backend eficientes y escalables.</p>

        <p>Mi habilidad para integrar tecnologías Front-End y Back-End me ha permitido ofrecer soluciones completas y bien estructuradas. Trabajo con Vue.js para crear interfaces dinámicas y receptivas, aprovechando la potencia de las aplicaciones de una sola página (SPA). Además, mi experiencia en TypeScript contribuye a la creación de código más robusto y mantenible.</p>
      </article>

      <article data-aos="fade-down" class="flex justify-center lg:w-2/6">
        <div class="grid grid-cols-3 lg:flex gap-10 flex-wrap">
          <Tecnologie
          v-for="tecnologie in tecnologies"
          :tecnologie="tecnologie"
          />
          
        </div>
      </article>
    </section>

    <section class="grid grid-cols-1 gap-10 place-items-center p-6 lg:flex lg:gap-0 justify-between items-center">
      <article data-aos="fade-right" class="lg:w-3/6">
        <div class="inline-block">
                <h1 class="text-2xl font-bold text-center italic text-white mb-5">
                    Cursos:
                </h1>
                <Educacion
                    v-for="curso in cursos"
                    :curso="curso"
                />
                <h1 class="text-2xl font-bold text-center italic text-white mt-5 mb-5">
                    Certificaciones:
                </h1>
                <Certificaciones
                    v-for="certificacion in certificaciones"
                    :certificacion="certificacion"
                />
          </div>
      </article>

      <article data-aos="fade-left" class="lg:w-2/6 space-y-5">
        <h1 class="text-2xl font-bold text-center italic text-white mb-5">Mi Formacion</h1>

        <p class="text-xl text-white font-medium mx-4">
          Con una base sólida en Desarrollo Web respaldada por certificaciones en Algoritmos de Datos, Desarrollo Backend y API en JavaScript, mi viaje formativo se expande a través de cursos especializados en Node.js, Vue.js (con el Prof. Juan Pablo De La Torre), TypeScript (con Fernando Herrera), y Docker en plataformas como Udemy. Estoy comprometido con la creación de soluciones tecnológicas innovadoras y eficientes con las mejores practicas de desarrollo.
        </p>

        <p class="text-xl text-white font-medium mx-4">
          En mi recorrido, he fortalecido mi base técnica a través de proyectos prácticos en plataformas como FreeCodeCamp, donde obtuve certificaciones en Algoritmos de Datos y Desarrollo Backend. Estas experiencias prácticas han enriquecido mi comprensión y aplicación de conceptos clave, permitiéndome abordar desafíos complejos con confianza. Mi enfoque no solo se limita a la adquisición de conocimientos, sino también a la implementación efectiva de soluciones que contribuyen al mundo del desarrollo tecnológico de manera significativa.
        </p>
      </article>
    </section>

  </main>
</template>

<style>
.tecnologie:hover {
  transform: scale(1.1);
  transition: transform 0.3s ease;
}

</style>
