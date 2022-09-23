<template>
   <div>
        <h1>Modificar datos del alumno</h1>

        <form @submit.prevent="actualizar">
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
    import { doc, updateDoc } from "firebase/firestore";

    export default {
        name: 'EditarAlumnos',
        data(){
            return{
                id:'',
                nombre:'',
                nota:0
            }
        },
        created(){
            this.id = this.$route.query.id
            this.nombre = this.$route.query.nombre
            this.nota = this.$route.query.nota
        },
        methods:{
            async actualizar(){
                if (window.confirm("Estas seguro de modificar alumno")){
                    const actualizar = doc(db, 'alumnos', this.id)
                    try{
                        await updateDoc(actualizar, {
                            nombre: this.nombre,
                            nota: this.nota
                        })
                        // Redireccionamos al componente GestionAlumnos
                        this.$router.push("/")
                        
                    } catch(error){
                        console.log(error)
                    }
                } else {
                    alert("Actualizacion cancelada")
                }

            }
        }
    }
</script>