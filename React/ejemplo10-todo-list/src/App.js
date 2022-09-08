import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import React from 'react';

class App extends React.Component {

  constructor(){
    super();

    this.state = {
      arrayDatos: []
    }
  }

  handleSubmit = e => {
    // Cancelar el submit
    e.preventDefault();

    // Con el valor recibido lo agregamos al estado
    let valor = Object.fromEntries(new FormData(e.target));
    this.setState(
      {arrayDatos: this.state.arrayDatos.concat(valor.tarea)}
    );
    //console.log(this.state.arrayDatos)
  }

  render(){
    return (
      <div>
        <TodoForm onSubmit={this.handleSubmit} />
        <TodoList coleccion={this.state.arrayDatos} />
      </div>
    );
  }
}

export default App;
