<script setup>
   import { ref } from 'vue';
 
   let contador = ref(0);

   //const contador = 0;
    
  const incrementar = () => {
    contador++;
    console.log(contador);
  };  

  

    // mounted(){
    //   this.$refs.idText.focus();
    //   this.$refs.descText.setAttribute("class", "azul");
    //   this.$refs.descText.setAttribute("style", "background-color:#ddd;");
    //   this.nombre = "Juanito"
    //   //document.getElementById()
    // }
    
  
</script>

<template>
  <div>
      <h1>{{contador}}</h1>
  
        <!-- <label>ID:</label>
        <input type="text" ref="idText" /> <br/>

        <label>Descripcion:</label>
        <input type="text" ref="descText" /> <br/>

        <label>Precio:</label>
        <input type="text" ref="precioText" /> <br/> -->

        <button type="button" @click="incrementar">Enviar</button>
     
  </div>
</template>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .azul{
    color: blue;
  }
</style>
