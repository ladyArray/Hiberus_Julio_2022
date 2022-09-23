import { createApp } from 'vue'
import App from './App.vue'

// Importamos el modulo de rutas
import router from './router';

//createApp(App).use(router).mount('#app')

// Otra forma de ponerlo:
const app = createApp(App);
app.use(router);
app.mount('#app');
 