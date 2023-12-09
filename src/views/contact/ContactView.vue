<script setup>
import { RouterView, RouterLink, useRouter } from 'vue-router';
import { onMounted, onBeforeUnmount, ref, inject } from 'vue';
import AOS from 'aos'
import emailApi from '../../api/emailApi';

const router = useRouter()

const formData = ref({
    name: '',
    email: '',
    message: ''
})

const toast = inject('toast')

const handleSubmit = async() => {
    
    try {

        const { data } = await emailApi.sendMail(formData.value)
        console.log(formData.value)
        console.log(data)

    toast.open({
        message: data.msg,
        type: 'success'
    })

    formData.value = {
        name: '',
        email: '',
        message: ''
    }

    setTimeout(() => {
        router.push({name:'home'})
    }, 3000)
        
    } catch (error) {
        console.log(error)
    }

    

    
}

onMounted(() => {
    AOS.init()
})

onBeforeUnmount(() => {
    router.push({name:'home'})
});

</script>


<template>
    <main class="grid grid-cols-1 place-items-center lg:flex items-center justify-center p-4">

        <section data-aos="fade-right" class="my-20 lg:w-1/3">
            <h1 class="text-center text-4xl text-white font-bold mb-5">¡Contactame, estare encantado de ayudar! </h1>
            <form class="flex flex-col gap-5" @submit.prevent="handleSubmit" action="#">
                <label class="text-xl text-white italic font-medium">
                    Nombre
                </label>
                <input class="w-full rounded-lg p-2 font-bold italic" placeholder="Ej: Miguel Gonzales" type="text" name="name" v-model="formData.name" id="name">

                <label class="text-xl text-white italic font-medium">
                    Correo Electronico
                </label>
                <input class="w-full rounded-lg p-2 font-bold italic" placeholder="Ej: correo@correo.com" type="email" name="email" v-model="formData.email" id="email">


                <label class="text-xl text-white italic font-medium">Mensaje</label>
                <textarea class="w-full rounded-lg p-4 font-bold italic" v-model="formData.message" name="message">

                </textarea>

                <input class="rounded-lg border border-sky-500 p-2 text-xl font-bold text-white cursor-pointer hover:bg-sky-600 transition ease-all 0.5s bg-sky-900 shadow-md"
                type="submit">

            </form>
        </section>

        <section data-aos="fade-left" class="lg:w-2/3 p-4 space-y-10">
            <h2 class="text-center text-3xl text-white font-bold mb-4">¡Tu opinión y preguntas son muy importantes para mí!</h2>
            
            <p class="text-center text-gray-300 mb-6">Si tienes alguna pregunta, sugerencia o simplemente quieres saludar, no dudes en escribirme. Estoy aquí para ayudarte en lo que necesites. Tu mensaje será recibido con aprecio y responderé tan pronto como sea posible.</p>

            <p class="text-center text-gray-300">No importa si eres un colega de la industria, un posible empleador o simplemente alguien interesado en mi trabajo, ¡espero con ansias saber de ti! Juntos podemos crear algo increíble.</p>
        </section>

    </main>
</template> 