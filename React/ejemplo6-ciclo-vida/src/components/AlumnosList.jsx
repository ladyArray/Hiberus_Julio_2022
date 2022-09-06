import React, { Component } from 'react'

export class AlumnosList extends Component {
  render() {
    return (
      <div>
        <ul>
            {this.props.lista.map((alumno, index) => {
                return(
                    <li key={index}>
                        {index + 1}.- Nombre: {alumno.nombre}, Nota: {alumno.nota}
                    </li>
                )
            })}
        </ul>
      </div>
    )
  }
}

export default AlumnosList