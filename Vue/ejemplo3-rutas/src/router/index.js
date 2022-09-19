import HomeComponent from '@/components/HomeComponent';
import ContactoComponent from '@/components/ContactoComponent';
import UbicacionComponent from '@/components/UbicacionComponent';
import { createRouter, createWebHistory } from 'vue-router';

// Se tiene que llamar obligatoriamente routes
const routes = [
    {path:'/',  component: HomeComponent},
    {path:'/contacto', component: ContactoComponent},
    {path:'/ubicacion',  component: UbicacionComponent},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;