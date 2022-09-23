<template>
    <div>
        <h1>API Pokemons</h1>
        <h2>Busca tu pokemon</h2>
        <input type="text" v-model='nombre'
            placeholder="Introduce nombre"/>
        <button @click="buscarPokemon">Buscar</button>
        <hr/>

        <div v-if="encontrado != undefined">
            <h3>Detalle del pokemon encontrado</h3>
            <p>Nombre: {{encontrado.name}}</p>
            <p>Peso: {{encontrado.weight}}</p>
        </div>

        <h2>Lista de pokemons</h2>
        
        <ul>
            <li v-for='pokemon in pokemons' :key='pokemon.name'>
                <p>{{pokemon.name}}: </p>
                <p>{{pokemon.url}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
    import axios from 'axios';

    export default{
        name: 'PokemonRest',
        data() {
            return{
                pokemons: [],
                encontrado: undefined
            }
        },
        async created(){
            try{
                const respuesta = await axios.get('https://pokeapi.co/api/v2/pokemon');
                this.pokemons = respuesta.data.results;
            } catch(error){
                console.log(error);
            }
            
        },
        methods: {
            async buscarPokemon(){
                console.log(this.nombre);
                try{
                    const respuesta = await axios.get('https://pokeapi.co/api/v2/pokemon/'+this.nombre);
                    console.log(respuesta.data);
                    this.encontrado = respuesta.data;
                } catch(error){
                    console.log(error)
                    this.encontrado = undefined;
                }
            }
        }
    }
</script>