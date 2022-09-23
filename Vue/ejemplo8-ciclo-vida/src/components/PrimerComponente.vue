<template>
    <h1>Primer componente</h1>
</template>

<script>
    export default {
        name: 'PrimerComponente',
        beforeCreate(){
            // Tareas de inicializacion 
            console.log("El componente se va a crear")
        },
        created(){
            // Crear la instancia
            // Realizar peticiones REST
            console.log("El componente se ha creado")
        },
        beforeMount(){
            // Asegurarnos si hay otro componente montado 
            console.log("El componente se va a montar")
        },
        mounted(){
            // Es como Render, visualizarlo en el navegador
            // Ya es accesible en el arbol DOM
            console.log("El componente se ha montado")
        },
        beforeUnmount(){
            // Liberar recursos
            // Almacenar informacion
            // Log
            alert("El componente se va a desmontar")
        },
        unmounted(){
            alert("El componente se ha desmontado")
        }
    }
</script>
