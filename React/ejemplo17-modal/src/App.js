import './App.css';

import Modal from 'react-modal'
import { useState } from 'react';

const estilo = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
}

function App() {

  const [abierto, setAbierto] = useState(false)

  const abrirModal = (e) => {
    setAbierto(true);
  }

  const cerrarModal = (e) => {
    setAbierto(false);
  }

  const afterModalOpen = (e) => {
    document.body.style.backgroundColor = '#444';
  }

  const afterModalClose = (e) => {
    document.body.style.backgroundColor = '#fff';
  }

  return (
    <div>
      <h1>Ejemplo de Modal</h1>
      <button onClick={abrirModal}>Abrir modal</button>

      <Modal
        isOpen={abierto} 
        style={estilo}
        onAfterOpen={afterModalOpen}
        onAfterClose={afterModalClose}>
          <div>Contenido a mostrar</div> 
          <button onClick={cerrarModal}>Cerrar</button>         
      </Modal>

    </div>
  );
}

export default App;
