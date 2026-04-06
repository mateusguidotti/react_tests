// src/App.jsx

import './App.css'; 
// 1. O IMPORT: Estamos a "puxar" a peça de Lego que criámos no outro ficheiro.
import Navbar from './Navbar';
import ProductSection from './ProductSection';

function App() {
  return (
    <div className="pagina-teste">
      <Navbar />
      <ProductSection/>
    </div>
  );
}

export default App;