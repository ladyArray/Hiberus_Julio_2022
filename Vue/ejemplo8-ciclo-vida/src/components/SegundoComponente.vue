<template>
    <button @click="saludar">Pulsame</button>
</template>

<script setup>
    const nombre = "Pepito";

    function saludar(){
        alert("Que tal? " + nombre)
    }
</script>