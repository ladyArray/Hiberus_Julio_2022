<template>
    <div style="background-color: silver ">
        <span style="float: right; cursor: pointer; margin:5px;" @click="cerrar">
            cerrar
        </span>
        <h2>Agregar alumnos</h2>
        
        <form @submit.prevent="guardar">
            <label>Nombre:</label>
            <input type="text" v-model='nombre'  /> <br/>

            <label>Nota:</label>
            <input type="number" v-model="nota"  /> <br/>

            <button type="submit">Guardar datos</button>
        </form>
    </div>
</template>

<script>
    import {db} from '../firebaseDb';
    import { addDoc, collection } from "firebase/firestore";

    export default {
        name: 'AddAlumnos',
        data(){
            return{
                nombre:'',
                nota:0
            }
        },
        methods: {
            async guardar(){
                try{
                    await addDoc(collection(db, 'alumnos'), {
                        nombre: this.nombre,
                        nota: this.nota
                    }) 

                    // limpiar datos
                    this.nombre = '';
                    this.nota = 0;      
                } catch (error){
                    console.log(error);
                }
            },
            cerrar(){
                this.$emit('cerrar-add');
            }
        }
    }
</script>