import { doc, updateDoc } from 'firebase/firestore'
import React from 'react'
import { useState } from 'react'
import { db } from '../firebase'

function EditarAlumno({id, editNombre, editNota, onClose}) {

    const [nombre, setNombre] = useState(editNombre)
    const [nota, setNota] = useState(editNota)

    const actualizarAlumno = async (e) => {
        // Cancelar el submit
        e.preventDefault()
        if (window.confirm("Estas seguro de modificar alumno")){
            const actualizar = doc(db, 'alumnos', id)
            try{
                await updateDoc(actualizar, {
                    nombre: nombre,
                    nota: nota
                })
                onClose()
            } catch(error){
                console.log(error)
            }
        } else {
            alert("Actualizacion cancelada")
        }

        
    }

    return (
        <div>
            <h2>Modificar alumno</h2>
            <form onSubmit={actualizarAlumno}>
                <input 
                    type="text" 
                    name='nombre'                
                    onChange = {(e) => setNombre(e.target.value)} 
                    value={nombre}/>
                <input 
                    type="text" 
                    name='nota'        
                    onChange = {(e) => setNota(e.target.value)}
                    value={nota} />
                <button type='submit'>Actualizar</button>
            </form>
        </div>
    )
}

export default EditarAlumno