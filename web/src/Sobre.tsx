import React from 'react';
import './sobre.css';
import { Link } from 'react-router-dom';


export const Sobre: React.FC = () => {
  return (
    <div className="sobre-container">
      <header className="sobre-header">
        <nav className="sobre-nav">
            <Link to = "/Principal">
                <span className="nav-item">HOME</span>
            </Link>
            <Link to = "/Sobre">
                <span className="nav-item">SOBRE</span>
            </Link>    
        </nav>
      </header>

      <section className="banner-title-section">
        <h1 className="banner-title">FREELANCER</h1>
      </section>

      <main className="sobre-content">
        <img
          src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1600&q=80"
          alt="Mesa de trabalho vista de cima com notebook e café"
          className="desk-img"
        />
      </main>
    </div>
  );
};

export default Sobre;