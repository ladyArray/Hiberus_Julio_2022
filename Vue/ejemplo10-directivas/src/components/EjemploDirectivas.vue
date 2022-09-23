<template>
  <div>
    <!-- https://lenguajejs.com/vuejs/directivas-vue/que-son-directivas/ -->
    <!-- https://vuejs.org/api/built-in-directives.html -->
    
    <h3>Directiva v-html</h3>
    <div v-html="contenido"></div> <!-- funciona como innerHtml -->

    <h3>Directiva v-pre</h3>
    <div>{{nombre}}</div>
    <div v-pre>{{nombre}}</div> <!-- no renderiza, literalmente aparece {{nombre}} -->

    <h3>Directiva v-once</h3>
    <button @click="numero++">Incrementar</button>
    <div v-once>Numero de inicio: {{numero}}</div> <!-- Solo se renderiza la primera vez -->
    <div>Contador: {{numero}}</div>

    <h3 >Directiva v-cloak no funciona</h3>
    <div id="#app" >  
      <div v-cloak></div>
    </div>
   
    <h3>Directiva v-text</h3>
    <p v-text="nombre"></p> <!-- es equivalente {{nombre}} -->


    
  </div>
</template>

<script>
  export default {
    name: 'EjemploDirectivas',
    data(){
      return{
        contenido: "<b>Pepito</b>",
        nombre: "Juan",
        numero: 0,
        app: ''
      }
    },
    // created(){
    //   this. app = new Vue({
    //         el: '#app',
    //         data: {
    //             data: 'Cargando datos...'
    //         }
    //     })
    // }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  [v-cloak] > * { display:none; }
  /* [v-cloak]::before { content: "loading..."; } */
  
</style>
