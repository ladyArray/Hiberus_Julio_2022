<template>
    <div>
        <h1>Validacion de formularios</h1>

        <form @submit.prevent="mostrar">
            <div>
                <label>Nombre:</label>
                <input type="text" v-model="valid$.form.nombre.$model" /> 
                
                <span v-for="(err, index) of valid$.form.nombre.$errors" :key={index}>
                    {{err.$message}}
                </span> <br/>

                <label>Edad:</label>
                <input type="number" v-model="valid$.form.edad.$model" /> 
                
                <span v-for="(err, index) of valid$.form.edad.$errors" :key={index}>
                    {{err.$message}}
                </span><br/>
            </div>
            <button type="submit" :disabled="valid$.form.$invalid">Enviar</button>  <br/>

            <!-- Mostrar todos los mensajes en una lista -->   
            <ul>
                <li v-for="(error, index) in valid$.form.$errors" :key="{index}">
                    {{error.$message}}
                </li>
            </ul>
        </form>
    </div>
</template>

<script>
    import {minLength,  required, helpers } from '@vuelidate/validators';
    import useVuelidate from '@vuelidate/core';

    export default {
        name: 'ValidacionFormulario',
        setup(){
            return{
                valid$: useVuelidate()
            }
        },
        data() {
            return{
                form:{
                    nombre:'',
                    edad: 0
                }
            }
        },
        validations(){
            return {             
                form:{
                    nombre:{
                        required: helpers.withMessage('Dato obligatorio', required),
                        min: helpers.withMessage('Minimo 3 caracteres', minLength(3))
                    },
                    edad:{
                        validarEdad: helpers.withMessage('No eres mayor de edad', this.validarEdad)
                    }
                }
            }  
        },
        methods: {
            mostrar(){
                console.log(this.form.nombre)
            },
            validarEdad: (edad) =>{
                return (edad >= 18);
                // if (edad<18) {
                //     console.log("Menor de edad")
                //     return false;  // No es valido
                // } else {
                //     return true;   // Si es valido
                // }
            }
        }
    }
</script>

<style scoped>
    span{
        color: red
    }
    ul{
        color: red;
        background-color: silver;
        width: 30%;
        margin: auto;
    }
</style>