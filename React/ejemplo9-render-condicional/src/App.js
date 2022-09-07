import logo from './logo.svg';
import './App.css';
import UsuarioRegistrado from './components/UsuarioRegistrado';
import UsuarioNoRegistrado from './components/UsuarioNoRegistrado';

function App() {
  return (
    <div className="App">
      <Mostrar logado={true} nombre='Juan' />
    </div>
  );
}

// Version 1 if-else
// function Mostrar(props){
//   if (props.logado){
//     return <UsuarioRegistrado />
//   } else {
//     return <UsuarioNoRegistrado />
//   }
// }

// Version 2 condicion ? true : false
// function Mostrar(props){
//   return props.logado ? <UsuarioRegistrado /> : <UsuarioNoRegistrado />
// }

// Version 3 JSX
function Mostrar(props){
  return(
    <div>
      {props.logado ? <UsuarioRegistrado /> : <UsuarioNoRegistrado />}
      {!props.logado && <button>Registrarse</button>}

      {props.logado && <h2>Usuario: {props.nombre} </h2>}
    </div>
  )
}

export default App;
