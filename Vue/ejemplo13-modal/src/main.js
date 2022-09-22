import { createApp } from 'vue'
import App from './App.vue'

// Agregamos bootstrap, jquery y popper
// Tambien funciona en App.vue
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery/dist/jquery.js';
import '@popperjs/core/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';

createApp(App).mount('#app')
