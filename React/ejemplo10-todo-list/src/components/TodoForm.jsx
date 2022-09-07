import React, { Component } from 'react'

export class TodoForm extends Component {

    constructor(){
        super();

        this.state = {
            texto: ''
        }
    }

    guardarValor = e =>{
        this.setState(
            {texto: e.target.value}
        )
    }

  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
            <label>Tarea:</label>
            <input type="text" name="tarea" value={this.state.texto}  onChange={this.guardarValor} />
            <input type="submit" value="Agregar" />
        </form>
      </div>
    )
  }
}

export default TodoForm