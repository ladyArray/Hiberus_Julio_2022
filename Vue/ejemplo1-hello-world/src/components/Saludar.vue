<template>
    <div>
        <button @click.left="mostrar" @click.right="otro">Pulsame</button>
        <div @mouseover="dentro('Pepito')" 
            @mouseout="fuera"></div>
    </div>   
</template>

<script>
    export default {
        //name: 'mi-saludar'   siempre palabras compuestas con guion o camelCase
        name: 'miSaludar',
        methods: {
            mostrar(){
                alert("Hola, por fin viernes")
            },

            otro(){
                alert("Has pulsado boton derecho")
            },

            dentro(nombre){
                alert('Estas dentro ' + nombre)
            },

            fuera(){
                alert('Estas fuera')
            }

        }
    }
</script>

<style scoped>
    button{
        background-color: blue;
        color: white;
    }
    div{
        width: 50%;
        height: 100px;
        background-color: bisque;
    }
</style>