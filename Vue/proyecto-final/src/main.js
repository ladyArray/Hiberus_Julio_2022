import { createApp } from 'vue'
import App from './App.vue'
import i18n from './i18n'

// Agregar VueGoogleMaps
import VueGoogleMaps from '@fawmi/vue-google-maps'

// Agregamos bootstrap, jquery y popper
// Tambien funciona en App.vue
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery/dist/jquery.js';
import '@popperjs/core/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';

import router from './router';

createApp(App)
    .use(router)
    .use(i18n)
    .use(VueGoogleMaps, {
        load: {
            key: '',
        }
    })
    .mount('#app')
