import React from 'react';
import './sobre.css';
import { Link, useNavigate } from 'react-router-dom';

export const Sobre: React.FC = () => {
  // O hook useNavigate fica aqui dentro, no início do componente
  const navigate = useNavigate();

  const handleLogout = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Remove os dados do usuário logado
    localStorage.removeItem('usuarioLogado');

    // Redireciona para a tela de Login
    navigate('/Login');
  };

  const usuarioLogado = localStorage.getItem('usuarioLogado');

  return (
    <div className="sobre-container">
      {/* Cabeçalho de Navegação */}
      <header className="sobre-header">
        <nav className="sobre-nav-left">
          <Link to="/Principal" style={{ textDecoration: 'none' }}>
            <span className="sobre-nav-item">HOME</span>
          </Link>
          <Link to="/Sobre" style={{ textDecoration: 'none' }}>
            <span className="sobre-nav-item active">SOBRE</span>
          </Link>
        </nav>

        <div className="sobre-nav-right">
          {/* Ícone do Carrinho aparece apenas se estiver logado */}
          {usuarioLogado && (
            <Link to="/Carrinho" style={{ textDecoration: 'none' }} className="icon-img-btn" title="Carrinho">
              <span className="cart-icon">🛒</span>
            </Link>
          )}

          {/* Botão de Logout */}
          <Link 
            to="/Login" 
            onClick={handleLogout} 
            style={{ textDecoration: 'none' }} 
            className="icon-img-btn" 
            title="Sair / Login"
          >
            <span className="serv-icon">🚪</span>
          </Link>
        </div>
      </header>

      {/* Faixa com o Título "FREELANCER" */}
      <section className="sobre-banner-section">
        <h1 className="sobre-banner-title">FREELANCER</h1>
      </section>

      {/* Conteúdo Principal da Página Sobre */}
      <main className="sobre-content">
        <div className="sobre-illustration-wrapper">
          {/* Espaço reservado para a ilustração/imagem explicativa */}
        </div>

        {/* Botão Inferior "CONHEÇA NOSSOS SERVIÇOS" */}
        <div className="sobre-action-wrapper">
          <Link to="/Servicos" style={{ textDecoration: 'none' }}>
            <button className="btn-conheca-sobre">
              CONHEÇA NOSSOS SERVIÇOS
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Sobre;