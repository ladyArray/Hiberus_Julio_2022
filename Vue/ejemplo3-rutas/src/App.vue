<template>
  <div>
    <h1> Titulo de la pagina </h1>
    <nav>
      <router-link to='/'>Home</router-link>
      <router-link to='/contacto'>Contacto</router-link>
      <router-link to='/ubicacion'>Ubicacion</router-link>
    </nav>

    <router-view />  <!-- Contenedor donde se muestran los distintos componentes -->

    <h2> Pie de la pagina</h2>
  </div>
</template>

<script>
  export default {
    name: 'App',
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
