<template>
  <div>
    <h1>Ejemplo de render condicional</h1>

    <!-- Primera forma -->
    <!-- <p v-if="logado">El usuario esta logado</p>
    <p v-if="!logado">El usuario no esta logado</p> -->

    <!-- Segunda forma -->
    <!-- <p v-if="logado">El usuario esta logado</p>
    <p v-else>El usuario no esta logado</p> -->

    <p v-if="edad < 18">Lo siento,eres menor de edad</p>
    <p v-else-if="logado">Eres mayor y estas logado</p>
    <p v-else>No estas logado</p>

    <!-- v-if es lazy; si de inicio la condicion es false, no aparece en el DOM
         v-show es eager; aunque la condicion de inicio sea true o false
                existe en el DOM pero esta oculto -->
    <p v-show="logado">estas logado con show</p>
  </div>
</template>

<script setup>

  const edad = 19
  const logado = false

</script>