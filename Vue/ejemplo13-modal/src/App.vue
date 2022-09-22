<template>
  <div class="container">
    <button type="button" class="btn btn-primary" @click="show=true">Abrir modal</button>
    <mi-modal v-if="show" @cerrar-modal="show=false"/>
  </div>  
</template>

<script>

import MiModal from './components/MiModal.vue'

export default {
  name: 'App',
  data() {
      return{
          show: false
      }
  },
  components: {
    MiModal
  }
}
</script>

<style>

</style>
