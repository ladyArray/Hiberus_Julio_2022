import axios from 'axios';

// El dispath es quien dispara la llamada y contacta
// con el reducer para que este ultimo
// actialice la lista de usuarios en el state
export const traerTodos = () => async(dispatch) => {

    const respuesta = await axios.get('https://jsonplaceholder.typicode.com/users');
    
    dispatch({
        type: 'pedir_usuarios',
        payload: respuesta.data
    })
}