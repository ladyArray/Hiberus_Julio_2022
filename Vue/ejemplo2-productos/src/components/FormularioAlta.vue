<template>
    <div class="container">
        <h2>Alta de productos</h2>
        <form @submit.prevent="enviar">
            <label>ID</label>
            <input type="text" v-model="producto.id" /> <br/>

            <label>Descripcion</label>
            <input type="text" v-model="producto.descripcion" /> <br/>

            <label>Precio</label>
            <input type="text" v-model="producto.precio" /> <br/>

            <button type="submit">Enviar</button>
            
        </form>
    </div>
</template>

<script>
    export default {
        name: 'FormularioAlta',
        data() {
            return {
                producto: {
                    id: 0,
                    descripcion: '',
                    precio: 0
                }
            }
        },
        methods:{
            enviar(){
                //console.log(this.producto);
                this.$emit('enviar-producto' , this.producto);
            }
        }
    }
</script>

<style>

</style>