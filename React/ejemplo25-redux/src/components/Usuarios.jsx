import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import * as usuariosActions from '../actions/usuariosActions';

export class Usuarios extends Component {

    // No necesitamos el constructor porque el estado lo tenemos
    // en usuariosReducers
    /*
    constructor(){
        super();
        this.state = {
            lista_usuarios: []
        }
    }
    */

    componentDidMount(){
        //const respuesta = await axios.get('https://jsonplaceholder.typicode.com/users');
        // this.setState({
        //     usuarios: respuesta.data
        // })
        console.log(this.props.traerTodos());
    }

    render() {
        return (
            <div>
                <table border="1">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NOMBRE</th>
                            <th>EMAIL</th>
                            <th>WEBSITE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.usuarios.map((user) => {
                            return(
                                <tr key={user.id}>
                                    <td> {user.id} </td>
                                    <td> {user.name} </td>
                                    <td> {user.email} </td>
                                    <td> {user.website} </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

// Creamos una funcion que me devuelve el reducer o los reducers
// a los que quiero conectar el componente
const mapStateToProps = (reducers) => {
    return reducers.usuariosReducer;
}

export default connect(mapStateToProps, usuariosActions ) (Usuarios)