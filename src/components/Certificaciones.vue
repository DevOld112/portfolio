<script setup>

    const props = defineProps({
        certificacion:{
            type:Object,
            required: true
        }
    })

</script>

<template>

    <div class="my-2 flex items-center justify-between lg:text-sm rounded-2xl bg-secondary-50 p-4 gap-5 border border-sky-500 bg-sky-900">
        <p class="font-bold text-white ">
            {{ certificacion.titulo }}
        </p>

        <a
        :href="certificacion.enlace"
        class="bg-sky-900 text-white border border-sky-400 p-1 lg:p-2 rounded-lg font-extrabold hover:bg-sky-600 hover:text-gray-300 transition"
        target="_blank"
        >
        Certificacion
        </a>

        <img
        class=" mb-3 rounded-md"
        :src="'../../src/public/cursos/' + certificacion.logo + '.png'"
        :alt="'Curso'+ ' ' + certificacion.plataforma"
        style="max-width: 100%; width: 16vw; height: auto; display: block;"
        >
    </div>


</template>