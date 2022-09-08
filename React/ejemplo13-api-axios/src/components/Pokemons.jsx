import React, { Component } from 'react';
import axios from 'axios';

export class Pokemons extends Component {

    constructor(){
        super();
        this.state = {
            lista_pokemons: []
        }
    }

    async componentDidMount(){
        // Lanzamos la peticion de forma asincrona 
        // cuando el componente se ha montado
        const respuesta = await axios.get('https://pokeapi.co/api/v2/pokemon');
        //console.log(respuesta.data.results);
        
        this.setState({
            lista_pokemons: respuesta.data.results
        })
    }

    render() {
        console.log("Metodo render -------");
        return (
            <div>
                <h1>Lista de Pokemons</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>URL</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.lista_pokemons.map((pokemon) => {
                            return(
                                <tr key={pokemon.name}>
                                    <td>{pokemon.name}</td>
                                    <td>{pokemon.url}</td>
                                </tr>
                            )
                        } )}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Pokemons