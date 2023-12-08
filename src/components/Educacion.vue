<script setup>

    const props = defineProps({
        curso:{
            type: Object,
            required: true
        }
    })

</script>

<template>
    <div class="my-2 flex items-center justify-between rounded-2xl bg-secondary-50 p-2 gap-5 border border-sky-500 bg-sky-900 text-center text-white">
        <p class="font-bold ">
            {{ curso.profesor }}
        </p>

        <p class="font-bold ">
            {{ curso.titulo }} 
        </p>

        <img
        class=" mb-3 rounded-lg"
        :src="'/cursos/' + curso.logo + '.png'"
        :alt="'Curso'+ ' ' + curso.plataforma"
        style="max-width: 100%; width: 16vw; height: auto; display: block;"
        >
    </div>




</template>