<template>
  <div class="container">
    <header>
      <HeaderComp />
    </header>

    <nav>
      <BarraNavegacion />
    </nav>

    <section>
      <router-view />
    </section>

    <footer>
      <FooterComp />
    </footer>
  </div>
</template>

<script>
import HeaderComp from './components/HeaderComp.vue';
import FooterComp from './components/FooterComp.vue';
import BarraNavegacion from './components/BarraNavegacion.vue';

export default {
  name: 'App',
  components: {
    HeaderComp,
    FooterComp,
    BarraNavegacion
  }
}
</script>

<style scoped>
  header{
    width: 100%;
    height: 100px;
    background-color: lightseagreen;  
    color: white;
    text-align: center;
  }
  span{
      float: right;
  }

  section{
      min-height: 400px;
  }

  h2{
      color: white;
      text-align: right;
  }

  footer{    
      width: 100%;    
      height: 60px;    
      background-color: lightseagreen;    
      padding: 20px 20px;    
      color: white;
  }
</style>
