<template>
    <div>
        <div class="container text-center">
            <div class="row" style="margin-top: 50px;">
                <div class="col" v-for="user in usuarios" :key='user.id'>
                    <div class="card" style="width: 10rem">
                    <!-- <img :src=" 'https://i.pravatar.cc/300?img=' + user.id" class="card-img-top" :alt="user.username"> -->
                    <img :src="`https://i.pravatar.cc/150?img=${user.id}`" class="card-img-top" :alt="user.username">
                    <div class="card-body">
                        <h6 class="card-title">{{user.name}}, {{user.username}}</h6>
                        <p class="card-text">{{user.email}} </p>
                    </div>
                </div>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default{
        name: 'ContenidoEquipo',
        data(){
            return{
                usuarios: []
            }
        },
        async created(){  // Metodo de ciclo de vida
            try {
                const respuesta = await axios.get('https://jsonplaceholder.typicode.com/users');
                console.log(respuesta.data);
                this.usuarios = respuesta.data;
            } catch (error) {
                console.log(error);
            }
            
        }
    }
</script>