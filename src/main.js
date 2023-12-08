import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import "aos/dist/aos.css"
import { useToast } from 'vue-toast-notification'
import "vue-toast-notification/dist/theme-sugar.css"

import App from './App.vue'
import router from './router'

const app = createApp(App)

const $toast = useToast({
    duration: 3000,
    position: 'top-right'

})

app.use(createPinia())
app.use(router)

app.provide('toast', $toast)
app.mount('#app')
