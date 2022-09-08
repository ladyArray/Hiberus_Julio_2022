import './App.css';
import React from 'react';

class App extends React.Component {

  isInvalid = false;

  constructor(props){
    super();

    this.state = {
      form: {
        nombre:'',
        edad:''
      }
    }
  }

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    })
  }

  validar = () => {
    let errores = {};

    // Validar Nombre
    if (!(this.state.form.nombre).match(/^[A-Z][a-z]+$/)){
      errores['nombre'] = 'El nombre solo puede tener letras y la primera mayuscula';
    }

    if (!this.state.form.nombre.length > 0){
      this.isInvalid = true;
      errores['nombre'] = 'El nombre no debe estar vacio';
    }


    // Validad Edad
    if (this.state.form.edad < 18){
      this.isInvalid = true;
      errores['edad'] = 'Debes tener minimo 18 años';
    }

    this.setState(
      {errors: errores}
    );
  }

  render(){
    return (
      <div className="App">
        <form>
          <div>
            <label>Nombre:</label>
            <input type="text" name="nombre" onChange={this.handleChange} />
            <span style={{color:'red'}}>
              {this.isInvalid && this.state.errors.nombre}
            </span>
          </div>

          <div>
            <label>Edad:</label>
            <input type="number" name="edad" onChange={this.handleChange} />
            <span style={{color:'red'}}>
              {this.isInvalid && this.state.errors.edad}
            </span>
          </div>

          <input type="button" onClick={this.validar} value="validar" />
        </form>
      </div>
    );
  }
}

export default App;
