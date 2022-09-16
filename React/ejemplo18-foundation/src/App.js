import './App.css';
import BarraProgreso from './components/BarraProgreso';
import BarraProgresoDinamica from './components/BarraProgresoDinamica';
import Botones from './components/Botones';
import Switchs from './components/Switchs';

function App() {
  return (
    <div>
      <Botones />
      <Switchs />
      <BarraProgreso />
      <BarraProgresoDinamica />
    </div>
  );
}

export default App;
