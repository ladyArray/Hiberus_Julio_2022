<!-- Contenido HTML -->
<template>
  <div>
    <Saludar />
  </div>
</template>

<!-- Contenido JS -->
<script>
//importamos el componente a mostrar
import Saludar from './components/Saludar.vue'

export default {
  name: 'App',
  components: {
    Saludar
  }
}
</script>

<!-- Contenido CSS -->
<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
