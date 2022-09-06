import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {

  fuera = (e) => {
    alert('Estas fuera')
  }

  pegar(e){
    alert("Texto pegado")
  }

  render() {
    return (
      <div className="App">
        <div className="fondo"
          onMouseOver={(e) => {alert('Estas dentro')}}
          onMouseOut={this.fuera} >
        </div>

        <p
          onCopy={(e) => {alert(document.getSelection().toString())}}
          onCut={(e) => {alert('Texto cortado')}}
          onPaste={this.pegar} >
            
          Esto es un texto para hacer pruebas
        </p>
      </div>
    );
  }
}

export default App;
