import PrimerComponente from '@/components/PrimerComponente';
import SegundoComponente from '@/components/SegundoComponente';
import { createRouter, createWebHistory } from 'vue-router';

// Se tiene que llamar obligatoriamente routes
const routes = [
    {path:'/',  component: PrimerComponente},
    {path:'/segundo', component: SegundoComponente}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;