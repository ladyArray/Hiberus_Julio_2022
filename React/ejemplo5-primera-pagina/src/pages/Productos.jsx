import React from "react";
import Formulario from "../components/Formulario";
import Producto from "../components/Producto";
import Titulo from "../components/Titulo";

class Productos extends React.Component{

    // Crear el estado
    state = {
        form: {
            nombre: '',
            descripcion: '',
            precio: '',
            fabricante: '',
            imagen: ''
        }
    }

    // Manejador del evento para modificar el estado
    modificarEstado = e => {
        this.setState({
            form: {
                // Conservar los datos que ya estaban almacenados
                ...this.state.form,
                [e.target.name]:e.target.value
            }
        })
    }

    render(){
        return(
            <div className="container">
                <Titulo />
                <div className="row">
                    <div className="col-md-6">
                        <Producto
                            nombre={this.state.form.nombre}
                            descripcion={this.state.form.descripcion}
                            precio={this.state.form.precio}
                            fabricante={this.state.form.fabricante}
                            imagen={this.state.form.imagen} />
                    </div>
                    <div className="col-md-6">
                        <Formulario 
                            onChange={this.modificarEstado}
                            formValues={this.state.form} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Productos;