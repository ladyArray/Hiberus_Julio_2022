import React from 'react'
import { useContext } from 'react'

function Temas() {

    const temas = {
        claro: {
            background: '#eeeeee',
            foreground: '#000000'
        },
        oscuro: {
            background: '#222222',
            foreground: '#ffffff'
        }
    }
    const temaContext = React.createContext(temas.oscuro);
    const tema = useContext(temaContext);

    return (
        <temaContext.Provider value={tema}>
            <div style={{background: tema.background, color: tema.foreground}}>
                Temas
            </div>
        </temaContext.Provider>
        
    )
}

export default Temas