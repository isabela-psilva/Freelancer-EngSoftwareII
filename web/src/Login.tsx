import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import Modal from './Modal';

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const usuariosSalvos = JSON.parse(localStorage.getItem('usuarios') || '[]');
    const usuarioEncontrado = usuariosSalvos.find(
      (user: any) => user.username === username && user.password === password
    );

    if (usuarioEncontrado) {
      setModalMessage(`Bem-vindo(a), ${usuarioEncontrado.name}!`);
      localStorage.setItem('usuarioLogado', JSON.stringify(usuarioEncontrado));
      setIsSuccess(true);
    } else {
      setModalMessage('Usuário ou senha incorretos, ou conta não cadastrada!');
      setIsSuccess(false);
    }
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    if (isSuccess) {
      navigate('/Principal');
    }
  };

  return (
    <div className="login-container">
      <header className="login-header">
        <nav className="login-nav">
          <Link to="/Principal" style={{ textDecoration: 'none' }}>
            <span className="nav-item">HOME</span>
          </Link>
          <Link to="/Sobre" style={{ textDecoration: 'none' }}>
            <span className="nav-item">SOBRE</span>
          </Link>
        </nav>
      </header>

      <section className="banner-title-section">
        <h1 className="banner-title">LOGIN</h1>
      </section>

      <main className="login-content">
        <div className="login-card">
          <form onSubmit={handleSubmit} className="login-form">
            <div className="fields-wrapper">
              <div className="form-group">
                <label htmlFor="username">Nome de Usuário</label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Senha</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="form-actions">
              <button type="submit" className="btn-entrar">
                ENTRAR
              </button>
              
              <div className="register-text">
                <span>Não tem Conta?</span>
                <Link to="/Cadastro" className="register-link">
                  Cadastre-se
                </Link>
              </div>
            </div>
          </form>
        </div>
      </main>

      <Modal isOpen={modalOpen} message={modalMessage} onClose={handleCloseModal} />
    </div>
  );
};

export default Login;