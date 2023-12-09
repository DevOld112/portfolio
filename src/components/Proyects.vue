<script setup>

defineProps({
    project:{
        type: Object,
        required: true
    }
})

</script>

<template>
    <div class="border border-sky-700 p-4 lg:full flex-1 space-y-5 bg-sky-900 rounded-lg">
        <img
        :src="'/projects/' + project.name + '.png'"
        :alt="project.name"
        class="rounded-lg shadow-lg w-full h-auto"
        >
        <h2 class="text-xl font-bold text-white">Proyecto: {{ project.name }}</h2>
        <h3 class="text-medium font-bold text-white">Enlace: <a :href="project.link">{{ project.link }}</a></h3>
        <p class="text-medium font-bold text-white">{{ project.description }}</p>
        
        <div class="flex items-center">
            <div>
                <p class="text-medium font-bold text-white"> Tecnologias utilizadas: </p>
            </div>
            <div class="flex p-2 gap-4">
                <img
                v-for="tech in project.stacks"
                :key="tech"
                :src="'/tecnologies/' + tech + '.svg'"
                class="h-8 w-8"
                >
            </div>
            
        </div>
        
    </div>


</template>