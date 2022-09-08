import React, { Component } from 'react';
import api from '../services/api';

export class Usuarios extends Component {

    constructor(){
        super();
        this.state = {
            lista_usuarios: []
        }
    }

    async componentDidMount(){
        const respuesta = await api.usuarios.list();
        console.log(respuesta);

        this.setState({
            lista_usuarios: respuesta
        })
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
                        {this.state.lista_usuarios.map((user) => {
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

export default Usuarios