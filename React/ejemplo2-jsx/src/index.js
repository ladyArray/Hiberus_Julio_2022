// Contenido JavaScript
/*
const contenedor = document.getElementById('root');
const elemento = document.createElement('h1');
elemento.innerText = 'Bienvenidos al curso de React!!';
contenedor.appendChild(elemento);
*/

// Contenido JSX
import React from 'react';
import ReactDOM from 'react-dom/client';

const jsx = <h1>Bienvenidos al curso de React !!</h1>;
const contenedor = ReactDOM.createRoot(document.getElementById('root'));

// ReactDOM.render(que_contenido, donde);
//ReactDOM.render(jsx, contenedor);
contenedor.render(jsx);


// Otra forma
//React.createElement(elemento, atributos, children);
const enlace = React.createElement('a', {href:'http://google.es'}, 'Ir a Google');
contenedor.render(enlace);

// Introducimos variables
const nombre = 'Pepito';
const elementoPersonalizado = React.createElement('h1', {} ,`Bienvenid@ ${nombre} al curso de React !!`);
contenedor.render(elementoPersonalizado);

// JSX es mucho mas limpio
const jsx2 = <h1>Bienvenid@ {nombre} al curso de React !!</h1>;
contenedor.render(jsx2);

// Resolver expressiones
const jsx3 = <h2>Suma: 7 + 2 = {7+2}</h2>;
contenedor.render(jsx3);

// Invocar a metodos
const multiplicacion = () => 7*2;
const jsx4 = <h2>Multiplicacion: 7 x 2 = {multiplicacion()}</h2>;
contenedor.render(jsx4);

// Los valores que se resuelven como false, null, undefined
// React los ignora y no los rederiza
const jsx5 = <h1>Bienvenid@ {false} al curso de React !!</h1>;
contenedor.render(jsx5);

// Renderizar mas de un elemento
const elementoMultiple = React.createElement(
  'div',
  {},
  React.createElement('h1',{},'Bienvenidos al curso de React!!'),
  React.createElement('a', {href:'http://google.es'}, 'Ir a Google')
);
contenedor.render(elementoMultiple);

const jsx6 = (
  <div>
    <h1>Bienvenidos al curso de React!!</h1>
    <a href='http://google.es'>Ir a Google</a>
  </div>
);
contenedor.render(jsx6);