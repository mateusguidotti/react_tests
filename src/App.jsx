// src/App.jsx

import './App.css'; 
// 1. O IMPORT: Estamos a "puxar" a peça de Lego que criámos no outro ficheiro.
import Navbar from './Navbar';
import Hero from './Hero';

function App() {
  return (
    <div className="pagina-teste">
      <Navbar />
      <Hero/>
    </div>
  );
}

export default App;