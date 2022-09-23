<template>
    <div>
        <h1>Gestion de los alumnos</h1>

        <button @click="mostrar=true">Alumno nuevo</button>
        
        <h2>Lista de alumnos</h2>

        <table style="margin: auto">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Nota</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="alum in lista" :key='alum.id'>
                    <td>{{alum.nombre}}</td>
                    <td>{{alum.nota}}</td>
                    <td> 
                        <router-link :to="{path:'editar', query: {id: alum.id, nombre:alum.nombre, nota:alum.nota}}">
                            <button style="background-color: green">Modificar</button>
                        </router-link>   
                    </td>
                    <td> 
                        <button @click="borrar(alum.id)" style="background-color: red">Eliminar</button>
                    </td>
                </tr>
            </tbody>
        </table>
        
        <div v-if="mostrar">
            <add-alumnos @cerrar-add='mostrar=false' />
        </div>
        
    </div>
</template>

<script>
    import {db} from '../firebaseDb';
    import { doc, deleteDoc, collection, onSnapshot, query } from "firebase/firestore";
    import AddAlumnos from './AddAlumnos.vue';

    export default {
        name: 'GestionAlumnos',
        components:{
            AddAlumnos
        },
        data() {
           return {
            lista: [],
            mostrar: false
           }
        },
        methods: {
            async borrar(id){
                if (window.confirm("Estas seguro de elimnarlo?")){
                    const eliminarAlumno = doc(db, 'alumnos', id)
                    try{
                        await deleteDoc(eliminarAlumno)
                    } catch (error){
                        console.log(error)
                    }
                } else {
                    alert("Operacion cancelada");
                }
                
                    
            }
        },
        created(){
            const alumnosDB = query(collection(db, 'alumnos'))

            // Mantenemos a la escucha de cualquier cambio en la BBDD
            onSnapshot(alumnosDB, (snapshot) => {
                // limpiar la lista
                this.lista = [];
                snapshot.forEach((doc) => {
                    this.lista.push({
                        id: doc.id,
                        nombre: doc.data().nombre,
                        nota: doc.data().nota
                    })
                })

            })
        }
    }
</script>

<style>
    table, td, th{
        border: thin solid black;
        border-collapse: collapse;
    }
</style>