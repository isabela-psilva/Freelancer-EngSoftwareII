import React, { useState } from 'react';
import './Servicos.css';
import { Link, useNavigate } from 'react-router-dom';
import Modal from './Modal';

interface Servico {
  id: number;
  titulo: string;
  imagem: string;
  preco: number;
}

export const Servicos: React.FC = () => {
  // O useNavigate agora está corretamente DENTRO do componente
  const navigate = useNavigate();

  const handleLogout = (e: React.MouseEvent) => {
    e.preventDefault();
    localStorage.removeItem('usuarioLogado');
    navigate('/Login');
  };

  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const listaServicos: Servico[] = [
    {
      id: 1,
      titulo: 'Serviço de Ilustrador',
      imagem: 'https://static.todamateria.com.br/upload/ar/te/artedigital-0-cke.jpg',
      preco: 200.0,
    },
    {
      id: 2,
      titulo: 'Serviço de Escritor',
      imagem: 'https://unifor.br/documents/392166/4591987/a+escrita+e+os+sentidosdesktop+%282%29.png/2cc23e42-397d-e61b-8a1f-1868982c74d9?t=1619446773119',
      preco: 100.0,
    },
    {
      id: 3,
      titulo: 'Serviço de Programador',
      imagem: 'https://eseg.edu.br/wp-content/uploads/2026/05/ESEG-PROGRAMACAO-WEB.png',
      preco: 250.0,
    },
  ];

  const handleAdicionarCarrinho = (servico: Servico) => {
    const carrinhoAtual = JSON.parse(localStorage.getItem('carrinho') || '[]');
    const index = carrinhoAtual.findIndex((item: any) => item.id === servico.id);

    if (index > -1) {
      carrinhoAtual[index].quantidade += 1;
    } else {
      carrinhoAtual.push({ ...servico, quantidade: 1 });
    }

    localStorage.setItem('carrinho', JSON.stringify(carrinhoAtual));
    setModalMessage(`"${servico.titulo}" foi adicionado ao carrinho!`);
    setModalOpen(true);
  };

  const usuarioLogado = localStorage.getItem('usuarioLogado');

  return (
    <div className="serv-container">
      {/* Cabeçalho */}
      <header className="serv-header">
        <nav className="serv-nav-left">
          <Link to="/Principal" style={{ textDecoration: 'none' }}>
            <span className="serv-nav-item">HOME</span>
          </Link>
          <Link to="/Sobre" style={{ textDecoration: 'none' }}>
            <span className="serv-nav-item">SOBRE</span>
          </Link>
        </nav>

        <div className="serv-nav-right">
          {usuarioLogado && (
            <Link to="/Carrinho" style={{ textDecoration: 'none' }} className="icon-img-btn" title="Carrinho">
              <span className="serv-icon">🛒</span>
            </Link>
          )}
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

      {/* Conteúdo com os Cards */}
      <main className="serv-content">
        <div className="serv-cards-grid">
          {listaServicos.map((servico) => (
            <div key={servico.id} className="serv-card">
              <div className="serv-card-image-wrapper">
                <img src={servico.imagem} alt={servico.titulo} className="serv-card-img" />
              </div>

              <div className="serv-card-body">
                <h3 className="serv-card-title">{servico.titulo}</h3>
                
                {/* Exibição do Preço */}
                <span className="serv-card-price">
                  R$ {servico.preco.toFixed(2).replace('.', ',')}
                </span>

                <button
                  className="serv-btn-carrinho"
                  onClick={() => handleAdicionarCarrinho(servico)}
                >
                  ADICIONAR AO CARRINHO
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Modal
        isOpen={modalOpen}
        message={modalMessage}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
};

export default Servicos;