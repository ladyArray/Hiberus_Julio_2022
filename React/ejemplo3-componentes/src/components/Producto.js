import React from 'react';
import logo from '../images/logo.jpeg';

class Producto extends React.Component{

    // Lo minimo que necesita un componente es el metodo render()
    render(){
        return(
            <div>
                <div>
                    <img src={logo} />
                </div>
                <div>
                    <h1>Detalle del producto</h1>
                    <h2>Nombre: {this.props.nombre}</h2>
                    <h2>Descripcion: {this.props.descripcion}</h2>
                    <h2>Precio: {this.props.precio}</h2>
                    <h2>Fabricante: {this.props.fabricante}</h2>
                </div>
                <div>
                    <img src={this.props.imagen} width='50%' />
                </div>
            </div>
        );
    }
}

export default Producto;