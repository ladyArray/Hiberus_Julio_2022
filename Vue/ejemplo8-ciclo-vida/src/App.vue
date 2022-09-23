<template>
  <div>
    <nav>
      <router-link to="/">Componente 1</router-link> | 
      <router-link to="/segundo">Componente 2</router-link>
    </nav>
    <router-view />
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
