import { deleteDoc, doc } from 'firebase/firestore'
import React, {useState} from 'react'
import { db } from '../firebase'
import EditarAlumno from './EditarAlumno'

function Alumno({id, nombre, nota}) {

    // por defecto no se puede editar los campos, ni se visualiza el formulario
    const [open, setOpen] = useState({edit:false, view:false})

    const handleEliminar = async () => {
        const eliminarAlumno = doc(db, 'alumnos', id)
        try{
            await deleteDoc(eliminarAlumno)
        } catch (error){
            console.log(error)
        }
    }

    const cerrarFormulario = () => {
        setOpen({edit:false, view:false})
    }

    return (
        <div>
            <div>
                {nombre}: {nota} &nbsp;
                <button onClick={handleEliminar}>Eliminar</button> &nbsp;
                <button onClick={() => setOpen({...open, edit:true})}>Modificar</button>
            </div>

            {open.edit && 
            <EditarAlumno 
                id={id}
                editNombre={nombre} 
                editNota={nota}
                onClose = {cerrarFormulario} />}
        </div>
    )
}

export default Alumno