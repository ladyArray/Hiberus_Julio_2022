import './App.css';
import { Player } from "video-react";
import 'video-react/dist/video-react.css';

function App() {
  return (
    <div className="App">
      <Player
        //playsInline
        src='https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
        // Para que funcione autoplay tiene que estar el video muteado
        muted={true}
        // OJO P mayuscula
        autoPlay />    
    </div>
  );
}

export default App;
