import ContenidoHome from '@/components/ContenidoHome';
import ContenidoEquipo from '@/components/ContenidoEquipo';
import ContenidoUbicacion from '@/components/ContenidoUbicacion';
import { createRouter, createWebHistory } from 'vue-router';

// Se tiene que llamar obligatoriamente routes
const routes = [
    {path:'/',  component: ContenidoHome},
    {path:'/equipo', component: ContenidoEquipo},
    {path:'/ubicacion',  component: ContenidoUbicacion},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;