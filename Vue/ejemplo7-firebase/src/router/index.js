import EditarAlumnos from '@/components/EditarAlumnos'
import GestionAlumnos from '@/components/GestionAlumnos'
import { createWebHistory, createRouter } from 'vue-router'

const routes = [
    {path: "/", component: GestionAlumnos},
    {path: "/editar", component: EditarAlumnos}
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;