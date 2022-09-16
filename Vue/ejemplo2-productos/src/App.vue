<template>
  <div>
      <CatalogoProductos />   
  </div>
</template>

<script>
import CatalogoProductos from '@/components/CatalogoProductos.vue'


export default {
  name: 'App',
  components: {
    CatalogoProductos,
  }
}
</script>

<style>
  /* #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  } */
</style>
