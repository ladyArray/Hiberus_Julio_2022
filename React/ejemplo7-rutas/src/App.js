import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';

import {BrowserRouter, Route, Routes, NoMatch} from 'react-router-dom';

import Home from './components/Home';
import QuienesSomos from './components/QuienesSomos';
import Contacto from './components/Contacto';
import Error from './components/Error';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="conocenos" element={<QuienesSomos />} />
          <Route exact path="contacto" element={<Contacto />} />
          <Route path="*" element={<Error />} />
        </Routes>

      
      </div>
    </BrowserRouter>
  );
}

export default App;
