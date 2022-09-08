const BASE_URL = 'https://jsonplaceholder.typicode.com/users';

const llamarAPI = async(options={}) => {
    // Establecemos las cabeceras
    options.headers = {
        'Content-Type':'application/json',
        Accept:'application/json'
    }

    // Enviamos la peticion de forma asincrona
    const respuesta = await fetch(BASE_URL, options);
    const data = await respuesta.json();
    return data;
}

const api = {
    usuarios:{
        list(){
            return llamarAPI();
        }
    }
}

export default api;