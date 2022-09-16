import './App.css';
import Pokemons from './components/Pokemons';
import Temas from './components/Temas';
import Usuario from './components/Usuario';

function App() {
  return (
    <div className="App">
      <Usuario />
      <Pokemons />
      <Temas />
    </div>
  );
}

export default App;
