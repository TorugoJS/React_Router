// browswRouter => define onde a area do nosso app que vai trocar as páginas
// Routes => define as rotas
// Route => um elemento deste para cada rota, configurar com path e componente da rota

// 1 - config react router
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css';
import About from './pages/About';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
        <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
