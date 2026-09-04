import React from 'react';
import './Prince.css';
import { Link } from 'react-router-dom';


export const Index: React.FC = () => {
  return (
    <div className="home-container">
      <div>
        <header className="home-header">
          <nav className="sobre-nav">
            <span className="nav-item">HOME</span>
            <Link to = "/Sobre">
              <span className="nav-item">SOBRE</span>
            </Link>
          </nav>
        </header>
      </div>
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