import React from 'react';
import './Prince.css';
import { Link, useNavigate } from 'react-router-dom';

export const Index: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = (e: React.MouseEvent) => {
    e.preventDefault();
    localStorage.removeItem('usuarioLogado');
    navigate('/Login');
  };

  const usuarioLogado = localStorage.getItem('usuarioLogado');

  return (
    <div className="home-container">
      {/* Cabeçalho estilizado inteiramente via Prince.css */}
      <header className="home-header">
        <nav className="sobre-nav">
          <Link to="/Principal" style={{ textDecoration: 'none' }}>
            <span className="nav-item">HOME</span>
          </Link>
          <Link to="/Sobre" style={{ textDecoration: 'none' }}>
            <span className="nav-item">SOBRE</span>
          </Link>
          {!usuarioLogado && (
            <Link to="/Login" style={{ textDecoration: 'none' }}>
              <span className="nav-item">LOGIN</span>
            </Link>
          )}
        </nav>

        <div className="home-nav-right">
          {usuarioLogado && (
            <Link to="/Carrinho" style={{ textDecoration: 'none' }} className="icon-img-btn" title="Carrinho">
              <span className="cart-icon">🛒</span>
            </Link>
          )}
          
          {usuarioLogado && (
            <Link 
              to="/Login" 
              onClick={handleLogout} 
              style={{ textDecoration: 'none' }} 
              className="icon-img-btn" 
              title="Sair"
            >
              <span className="serv-icon">🚪</span>
            </Link>
          )}
        </div>
      </header>

      <main className="home-content">
        <section className="text-section">
          <h2 className="main-title">
            <span className="underline-text">ABRA AGORA SUA</span>{' '}
            <span className="underline-text">OPORTUNIDADE DE</span>{' '}
            <span className="underline-text">TRABALHAR COM O</span>{' '}
            <span className="underline-text">QUE GOSTA!</span>
          </h2>
          <p className="subtitle">
            Liberte o potencial do seu negócio com serviços freelancers sob medida
          </p>
        </section>

        <section className="image-section">
          <div className="card-shadow-wrapper">
            <div className="image-card">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Equipe trabalhando e colaborando em projetos freelancers"
                className="illustration-img"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;