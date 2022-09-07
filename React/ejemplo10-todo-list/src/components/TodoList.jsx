import React, { Component } from 'react'

export class TodoList extends Component {
  render() {
    return (
      <ul>
        {this.props.coleccion.map((tarea, index) => {
          return(
            <li key={index}> {index+1}.-   {tarea}</li>
          )
        })}
      </ul>
    )
  }
}

export default TodoList