import { createApp } from 'vue'
import App from './App.vue'
// Importar VueGoogleMaps
import VueGoogleMaps from '@fawmi/vue-google-maps'

//createApp(App).mount('#app')

const pepito = createApp(App)
pepito.use(VueGoogleMaps, {
    load: {
        key: '',   
    }
})
pepito.mount('#app')
