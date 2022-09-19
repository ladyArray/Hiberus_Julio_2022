<template>
    <select v-model="$i18n.locale" @change="mostrar($i18n.locale)">
        <option 
            v-for='(idioma, index) in locales'
            :key='index'
            :value="idioma">
            {{idioma}}
        </option>
    </select>
</template>

<script>
    export default {
        name: 'CambiarIdioma',
        data(){
            return {
                locales: ['es','en','fr']
            }
        },
        methods: {
            mostrar(idioma){
                console.log(idioma);
            }
        }
    }
</script>