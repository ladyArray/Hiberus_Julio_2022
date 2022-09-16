import { db } from "../firebase";
import React from 'react'
import { addDoc, collection, onSnapshot, query } from "firebase/firestore";
import { useState, useEffect } from "react";
import Alumno from "./Alumno";


// rfce -> crea el componente funcional

function MisAlumnos() {

    // Crear el estado del componente
    const [alumnos, setAlumnos] = useState([])
    const [nombre, setNombre] = useState('')
    const [nota, setNota] = useState('')

    useEffect(() => {
        // lanzar peticion a la BBDD
        const alumnosDB = query(collection(db, 'alumnos'))

        // Mantenemos a la escucha de cualquier cambio en la BBDD
        onSnapshot(alumnosDB, (snapshot) => {
            // Guardamos los alumnos en el estado
            setAlumnos(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        })
    }, [])

    const handleSubmit = async (e) => {
        // Cancelar el evento submit
        e.preventDefault();
        
        // Enviar los datos a firebase
        try{
            await addDoc(collection(db, 'alumnos'), {
                nombre: nombre,
                nota: nota
            })
            // Limpiar los campos del formulario
            setNombre('')
            setNota('')
        } catch (error){
            console.log(error);
        }
    }

    return (
        <div>
            <h1>Gestion de alumnos</h1>
            
            {alumnos.map((alum) => (
                <Alumno
                    id={alum.id}
                    key={alum.id}
                    nombre={alum.data.nombre} 
                    nota={alum.data.nota} />
            ))}

            <h2>Agregar alumnos</h2>
            <form onSubmit={handleSubmit}>
                <label>Nombre:</label>
                <input 
                    type="text" 
                    name="nombre" 
                    value = {nombre}
                    onChange = {(e) => setNombre(e.target.value)} /> <br/>
                <label>Nota:</label>
                <input 
                    type="text" 
                    name="nota"
                    value = {nota}
                    onChange = {(e) => setNota(e.target.value)} /> <br/>
                <button type="submit">Enviar</button>
            </form>
        </div>

    )
}

export default MisAlumnos