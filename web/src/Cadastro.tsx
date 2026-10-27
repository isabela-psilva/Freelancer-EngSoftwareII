import React, { useState } from 'react';
import './Cadastro.css';
import { Link, useNavigate } from 'react-router-dom';
import Modal from './Modal';

export const Cadastro: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    name: '',
    email: '',
    password: '',
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const usuariosSalvos = JSON.parse(localStorage.getItem('usuarios') || '[]');

    const usuarioExiste = usuariosSalvos.find((user: any) => user.username === formData.username);
    if (usuarioExiste) {
      setModalMessage('Este nome de usuário já está em uso!');
      setIsSuccess(false);
      setModalOpen(true);
      return;
    }

    usuariosSalvos.push(formData);
    localStorage.setItem('usuarios', JSON.stringify(usuariosSalvos));

    setModalMessage('Cadastro realizado com sucesso! Faça o login.');
    setIsSuccess(true);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    if (isSuccess) {
      navigate('/Login');
    }
  };

  return (
    <div className="cad-container">
      <header className="cad-header">
        <nav className="cad-nav">
          <Link to="/Principal" style={{ textDecoration: 'none' }}>
            <span className="cad-nav-item">HOME</span>
          </Link>
          <Link to="/Sobre" style={{ textDecoration: 'none' }}>
            <span className="cad-nav-item">SOBRE</span>
          </Link>
          <Link to="/Login" style={{ textDecoration: 'none' }}>
            <span className="cad-nav-item">LOGIN</span>
          </Link>
        </nav>
      </header>

      <section className="cad-banner-section">
        <h1 className="cad-banner-title">CADASTRO</h1>
      </section>

      <main className="cad-content">
        <div className="cad-card">
          <form onSubmit={handleSubmit} className="cad-form">
            <div className="cad-fields-wrapper">
              <div className="cad-form-group">
                <label htmlFor="username">Nome de Usuário</label>
                <input
                  type="text"
                  id="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="cad-form-group">
                <label htmlFor="name">Nome</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="cad-form-group">
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="cad-form-group">
                <label htmlFor="password">Senha</label>
                <input
                  type="password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="cad-form-actions">
              <button type="submit" className="cad-btn-submit">
                CADASTRAR
              </button>
            </div>
          </form>
        </div>
      </main>

      <Modal isOpen={modalOpen} message={modalMessage} onClose={handleCloseModal} />
    </div>
  );
};

export default Cadastro;