import logo from './logo.svg';
import './App.css';
import Entrada from './components/Entrada';

function App() {
  return (
    <div className="App">
      <Entrada id={1} type='text' /> <br/>
      <Entrada id={2} type='number' /> <br/>
      <Entrada id={3} type='file' /> <br/>
      <Entrada id={4} type='date' /> <br/>
      <Entrada id={5} type='color' /> <br/>
    </div>
  );
}

export default App;
