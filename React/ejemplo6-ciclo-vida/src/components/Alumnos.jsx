// rce intro para que genere la clase
// rconst   genera solo el constructor entero

import React, { Component } from 'react'
import AlumnosList from './AlumnosList';

export class Alumnos extends Component {

    constructor() {
        super();
        console.log("Paso 1. Constructor");

        // Para inicializar los datos en el constructor porque es lo primero que se ejecuta
        this.state = {
            data: []
        };
    }

    render() {
        console.log("Paso 2. Render");
        return (
            <div>
                <AlumnosList lista={this.state.data} />
            </div>
        )
    }

    componentDidMount(){
        console.log("Paso 3. El componente se ha montado");

        // Imaginamos que los datos se los pedimos a un API
        // Nos aseguramos que el componente ya se ha montado
        this.timeoutId = setTimeout(() => {
            this.setState({
                data: [
                    {nombre:'Juan', nota: 7.5},
                    {nombre:'Maria', nota: 8.2},
                    {nombre:'Pedro', nota: 6.3},
                    {nombre:'Luis', nota: 4.2},
                    {nombre:'Marta', nota: 5.9}
                ]
            })
        }, 5000);
    }


    componentWillUpdate(){
        console.log("Paso 4. El componente se va a modificar");
    }

    componentDidUpdate(){
        console.log("Paso 5. El componente se ha modificado");
    }

    componentWillUnmount(){
        console.log("Paso 6. El componente se va a desmontar");

        // Cancelar tareas pendientes
        // Liberar recursos
        // Finalizar el temporizador
        clearTimeout(this.timeoutId);
    }
}

export default Alumnos
