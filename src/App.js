import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <div className="container">
            <nav>
                <a href="#" id="icono" className="icono">Menú</a>
                <div className="enlaces uno" id="enlaces">
                    <a href="">Inicio</a>
                    <a href="">Acerca de</a>
                    <a href="">Contacto</a>
                </div>
            </nav>
            <div className="textos">
                <h1>Chevrolet Caaptiva</h1>
                <h2>traccion 4X4</h2>
                <a href="#">Saber mas</a>
            </div>
            
        </div>
    </header>
    <div className="wave">
        <div style="height: 150px; overflow: hidden;" ><svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;"><path d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style="stroke: none; fill: #fff;"></path></svg></div>
    </div>
    <script src="script.js"></script>
    </div>
  );
}

export default App;
