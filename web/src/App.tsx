import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Index from './Principal';
import Sobre from './Sobre';
import Login from './Login';
import Cadastro from './Cadastro';
import Servicos from './Servicos';
import Carrinho from './Carrinho';
import Footer from './Footer';
import ProtectedRoute from './ProtectedRoute';

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

        {/* Rotas Protegidas (Exigem Login) */}
        <Route 
          path="/Servicos" 
          element={
            <ProtectedRoute>
              <Servicos />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/Carrinho" 
          element={
            <ProtectedRoute>
              <Carrinho />
            </ProtectedRoute>
          } 
        />

        {/* Redirecionamento padrão para URLs desconhecidas */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {/* Footer fixo para todas as páginas */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;