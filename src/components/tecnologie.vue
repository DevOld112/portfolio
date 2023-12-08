<script setup>

const { props } = defineProps(['tecnologie']);

</script>

<template>
    <div class="circular-motion circular-motion:hover">
        <img
        :src="`../src/public/tecnologies/${tecnologie.name}.svg`" 
        :alt="tecnologie.name"
        />
        

        <h3 class="text-sm font-bold italic text-center mt-2 text-white uppercase">{{ tecnologie.name }}</h3>
    </div>
</template>

<style scoped>

@keyframes circularMotion {
      0% {
        transform: translateX(0) translateY(0);
      }
      25% {
        transform: translateX(25px) translateY(0);
      }
      50% {
        transform: translateX(0) translateY(25px);
      }
      75% {
        transform: translateX(-25px) translateY(0);
      }
      100% {
        transform: translateX(0) translateY(0);
      }
    }

    .circular-motion:hover {
      animation: circularMotion 2s linear infinite;
    }
</style>