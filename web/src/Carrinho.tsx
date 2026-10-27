import React, { useState, useEffect } from 'react';
import './Carrinho.css';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();

const handleLogout = (e: React.MouseEvent) => {
  e.preventDefault();
  
  // Remove os dados do usuário logado ou limpa o carrinho se preferir reiniciar a sessão
  localStorage.removeItem('usuarioLogado');
  // Se quiser limpar o carrinho ao sair, descomente a linha abaixo:
  // localStorage.removeItem('carrinho');

  // Redireciona para a tela de Login
  navigate('/Login');
};

interface ItemCarrinho {
  id: number;
  titulo: string;
  preco: number;
  quantidade: number;
}

export const Carrinho: React.FC = () => {
  const [carrinho, setCarrinho] = useState<ItemCarrinho[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  // Carrega os itens salvos do localStorage
  useEffect(() => {
    const itensSalvos = JSON.parse(localStorage.getItem('carrinho') || '[]');
    setCarrinho(itensSalvos);
  }, []);

  // Salva alterações no localStorage
  const atualizarCarrinho = (novosItens: ItemCarrinho[]) => {
    setCarrinho(novosItens);
    localStorage.setItem('carrinho', JSON.stringify(novosItens));
  };

  // Aumenta a quantidade
  const handleAumentar = (id: number) => {
    const atualizado = carrinho.map((item) =>
      item.id === id ? { ...item, quantidade: item.quantidade + 1 } : item
    );
    atualizarCarrinho(atualizado);
  };

  // Diminui a quantidade ou remove se chegar a 0
  const handleDiminuir = (id: number) => {
    const atualizado = carrinho
      .map((item) =>
        item.id === id ? { ...item, quantidade: item.quantidade - 1 } : item
      )
      .filter((item) => item.quantidade > 0);
    atualizarCarrinho(atualizado);
  };

  // Remove totalmente o produto
  const handleRemover = (id: number) => {
    const atualizado = carrinho.filter((item) => item.id !== id);
    atualizarCarrinho(atualizado);
  };

  // Calcula o valor total do carrinho
  const valorTotal = carrinho.reduce(
    (acc, item) => acc + item.preco * item.quantidade,
    0
  );

  const handleFinalizarPagamento = () => {
    if (carrinho.length === 0) {
      setModalMessage('Seu carrinho está vazio!');
    } else {
      setModalMessage('Redirecionando para o pagamento...');
      localStorage.removeItem('carrinho');
      setCarrinho([]);
    }
    setModalOpen(true);
  };

  return (
    <div className="cart-container">
      {/* Cabeçalho */}
      <header className="cart-header">
        <nav className="cart-nav-left">
          <Link to="/Principal" style={{ textDecoration: 'none' }}>
            <span className="cart-nav-item">HOME</span>
          </Link>
          <Link to="/Servicos" style={{ textDecoration: 'none' }}>
            <span className="cart-nav-item">SERVIÇOS</span>
          </Link>
        </nav>

        <div className="cart-nav-right">
          <Link to="/Carrinho" style={{ textDecoration: 'none' }} className="icon-img-btn" title="Carrinho">
            <span className="cart-icon">🛒</span>
          </Link>
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

      {/* Conteúdo Principal do Carrinho */}
      <main className="cart-content">
        <div className="cart-card">
          <h2 className="cart-title">Carrinho</h2>

          {/* Tabela de Produtos */}
          <div className="cart-table-wrapper">
            <table className="cart-table">
              <thead>
                <tr>
                  <th className="col-produto">Produto</th>
                  <th className="col-qtd">Qtd</th>
                  <th className="col-preco">Preço</th>
                </tr>
              </thead>
              <tbody>
                {carrinho.length > 0 ? (
                  carrinho.map((item) => (
                    <tr key={item.id}>
                      <td className="col-produto">
                        <div className="produto-info">
                          <span>{item.titulo}</span>
                          <button
                            className="btn-remover"
                            onClick={() => handleRemover(item.id)}
                            title="Remover produto"
                          >
                            ✕
                          </button>
                        </div>
                      </td>
                      <td className="col-qtd">
                        <div className="qtd-controls">
                          <button
                            className="btn-qtd"
                            onClick={() => handleDiminuir(item.id)}
                          >
                            -
                          </button>
                          <span>{item.quantidade}</span>
                          <button
                            className="btn-qtd"
                            onClick={() => handleAumentar(item.id)}
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="col-preco">
                        R$ {(item.preco * item.quantidade).toFixed(2).replace('.', ',')}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={3} className="carrinho-vazio">
                      Seu carrinho está vazio.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Exibição do Valor Total */}
          <div className="cart-total-section">
            <h3>
              Valor Total:{' '}
              <span>
                R$ {valorTotal.toFixed(2).replace('.', ',')}
              </span>
            </h3>
          </div>

          {/* Botão de Finalizar Pagamento */}
          <div className="cart-actions">
            <button className="btn-pagamento" onClick={handleFinalizarPagamento}>
              Finalizar Pagamento
            </button>
          </div>
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

export default Carrinho;