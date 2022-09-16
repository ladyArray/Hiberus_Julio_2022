// rfce
import React from 'react'
import { useState } from 'react'

function Usuario() {

    // Mediante hook useState guardamos los valores del formulario en el state
    // const[dato, setDato] = useState(valor_inicial)
    const [nombre, setNombre] = useState('')
    const [edad, setEdad] = useState(0)
    const [email, setEmail] = useState('')

    const mostrar = () => {
        alert(`Usuario Creado \n  ${nombre}  ${edad}  ${email}`);
        setNombre('')
        setEdad('')
        setEmail('')
    }

    return (
        <div>
            <form>
                <label>Nombre:</label>
                <input type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)} /> <br/>

                <label>Edad:</label>
                <input type="number"
                    value={edad}
                    onChange={(e) => setEdad(e.target.value)} /> <br/>

                <label>Email:</label>
                <input type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} /> <br/>

                <button type='button' onClick={mostrar}>Enviar</button>
            </form>
        </div>
    )
}

export default Usuario