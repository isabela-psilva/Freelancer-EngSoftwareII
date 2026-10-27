import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Index from './Principal';
import Sobre from './Sobre';
import Login from './Login';
import Cadastro from './Cadastro';
import Servicos from './Servicos';
import Carrinho from './Carrinho';
import Footer from './Footer';

function App() {
  return (
    <BrowserRouter>
      {/* As páginas trocam aqui */}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/Principal" element={<Index />} />
        <Route path="/Sobre" element={<Sobre />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Cadastro" element={<Cadastro />} />
        <Route path="/Servicos" element={<Servicos />} />
        <Route path="/Carrinho" element={<Carrinho />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {/* Footer fixo para todas as páginas */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;