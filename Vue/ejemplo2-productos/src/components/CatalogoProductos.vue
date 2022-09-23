<template>
  <div class="container">
    <h1> Gestión de productos </h1>
    <table>
      <tr>
        <th>ID</th>
        <th>Descripcion</th>
        <th>Precio</th>
      </tr>

      <!-- <template v-for="prod in productos" >
        <tr v-if="prod.precio > 100"  :key='prod.id'>
          <td>{{ prod.id}} </td>
          <td>{{ prod.descripcion}}</td>
          <td>{{ prod.precio }}</td>
        </tr>
      </template> -->

      <tr v-for="prod in productos"  :key='prod.id'>
        <td>{{ prod.id}} </td>
        <td>{{ prod.descripcion}}</td>
        <td>{{ prod.precio }}</td>
      </tr>
      
    </table>

    <FormularioAlta @enviar-producto="addProducto" />

  </div>
</template>

<script>
import FormularioAlta from './FormularioAlta.vue'

export default {
  name: 'CatalogoProductos',
  components: {
    FormularioAlta
  },
  props: {
    msg: String
  },
  data(){
    return{
      productos: [
        {id: 1, descripcion: 'Zapatillas Asics', precio: 129.50},
        {id: 2, descripcion: 'Zapatillas Nike', precio: 109.95},
        {id: 3, descripcion: 'Zapatillas Adidas', precio: 188.28},
        {id: 4, descripcion: 'Zapatillas Puma', precio: 92.90},
        {id: 5, descripcion: 'Zapatillas Under Armour', precio: 140.50},
        {id: 6, descripcion: 'Zapatillas Converse', precio: 78.95},
      ]
    }
  },
  methods: {
    addProducto(nuevo){
      this.productos = [...this.productos, nuevo];
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  table, th, td{
    border: thin solid black;
    border-collapse: collapse;
    margin-bottom: 50px;
  }
</style>
