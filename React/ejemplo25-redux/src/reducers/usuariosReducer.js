// Creo el estado inicial
const INITIAL_STATE = {
    usuarios: []
}

// Crear y exportar una funcion que se encargue de agregar
// los usuarios recibidos del action y agregarlos al state
// Implicitamente se hace un setState
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'pedir_usuarios':
            return{
                ...state,
                usuarios: action.payload
            }
    
        default:
            return state;
    }
}