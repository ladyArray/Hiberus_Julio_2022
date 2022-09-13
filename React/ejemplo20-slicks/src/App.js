import './App.css';
import SliderTexto from './components/SliderTexto';

// Es necesario importar los estilos slick
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SliderImagenes from './components/SliderImagenes';
import SliderImagenesFade from './components/SliderImagenesFade';
import SliderCustom from './components/SliderCustom';

function App() {
  return (
    <div>
      <SliderTexto />
      <SliderImagenes />
      <SliderImagenesFade />
      <SliderCustom />
    </div>
  );
}

export default App;
