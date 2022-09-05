import Producto  from "./components/Producto";

const atributos = {
  nombre:'Impresora',
  descripcion:"Laser multifuncion",
  precio:'140€',
  fabricante: 'Brother',
  imagen:'https://www.worten.es/i/eb436214389e1783e2861d1a1753396525245a33' 
};

function App() {
  return (
    <div>
      <Producto nombre="Portatil" descripcion="16Gb RAM, 500Gb Disco Duro ...."
          precio="599€" fabricante="HP"
          imagen="https://www.vsgamers.es/thumbnails/product_gallery_large/uploads/products/hp/portatiles-gaming/portatil-hp-250-g8-2w8y5ea-plata/galeria/ordenador-portatil-hp-250-g8-2w8y5ea-plata-galeria5.jpg" />,
      <Producto {...atributos} />
    </div>
  );
}

export default App;
