// browswRouter => define onde a area do nosso app que vai trocar as páginas
// Routes => define as rotas
// Route => um elemento deste para cada rota, configurar com path e componente da rota
// Link => usa o "to" que recebe a url para redirecionar

// 1 - config react router
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css';

import Navbar from './components/Navbar';
import SearchForm from './components/SearchForm';

import About from './pages/About';
import Home from './pages/Home';
import Info from './pages/Info';
import NotFound from './pages/NotFound';

import Product from './pages/Product';
import Search from './pages/Search';

function App() {
  return (

    <div className="App">

      <h1>React Router</h1>

      <BrowserRouter>


      <Navbar />

      {/* 9 - search */}
      <SearchForm />


        <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        {/* 4 - rota dinamina */}
        <Route path="/products/:id" element={<Product/>} />

        {/* 6 - nested routes */}
        <Route path="/products/:id/info" element={<Info/>} />
        
        {/* 9 - search */}
        <Route path="/search" element={<Search />} />

      {/* 7 - no match route */}
      <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
