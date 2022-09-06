import React from "react";
import '../components/Producto.css';

class Producto extends React.Component{
    render(){
        return(
            <div>
                <div>
                    <h1>Detalle del producto</h1>
                    <h2>Nombre: {this.props.nombre}</h2>
                    <h2>Descripcion: {this.props.descripcion}</h2>
                    <h2>Precio: {this.props.precio}</h2>
                    <h2>Fabricante: {this.props.fabricante}</h2>
                </div>
                <div>
                    <img src={this.props.imagen} alt={this.props.nombre} />
                </div>
            </div>
            
        );
    }
}

export default Producto;