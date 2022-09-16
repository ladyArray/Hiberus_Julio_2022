import axios from 'axios';
import { useState, useEffect } from 'react';

function Pokemons() {

    const [listaPokemons, setListaPokemons] = useState([])

    // El hook sustituye a los metodos de ciclo de vida: 
    // componentDidMount, componentDidUpdate, componentWillUnMount
    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon')
            .then((respuesta) => {
                console.log(respuesta.data.results)
                setListaPokemons(respuesta.data.results)
            })
            .catch((error) => {
                alert(error)
            })  
    }, [])

    // useEffect(() => {
    //     const getLista = async () =>{
    //         const pepito = await axios.get('https://pokeapi.co/api/v2/pokemon');
    //         setListaPokemons(pepito.data.results)
    //     }
    //     getLista() 
    // }, [])

    

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
                    {listaPokemons.map((pokemon) => {
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

export default Pokemons