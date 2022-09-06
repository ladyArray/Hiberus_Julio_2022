import React from "react";
import Formulario from "../components/Formulario";
import Producto from "../components/Producto";
import Titulo from "../components/Titulo";

class Productos extends React.Component{
    render(){
        return(
            <div className="container">
                <Titulo />
                <div className="row">
                    <div className="col-md-6">
                        <Producto />
                    </div>
                    <div className="col-md-6">
                        <Formulario />
                    </div>
                </div>
            </div>
        );
    }
}

export default Productos;