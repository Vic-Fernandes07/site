import React from 'react';
import './Escolha.css';

const Escolha = () => {
  return (
    <div className="escolha-container">
      {/* Header */}
      <div className="header">
        <a href="/" className="back-button">
          <svg viewBox="0 0 24 24" width="24" height="24" style={{ marginRight: '0.5rem' }}>
            <path fill="currentColor" d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" />
          </svg>
          Voltar
        </a>
        <h1>Escolha de Veículos</h1>
      </div>

      {/* Vehicle Categories */}
      <div className="categories">
        <div className="category-card">
          <div className="category-image">
            <img src="compact-car.jpg" alt="Compacto" />
          </div>
          <h3>Compacto</h3>
          <p>Ideal para viagens curtas e economizar combustível</p>
          <button className="choose-button">Escolher</button>
        </div>

        <div className="category-card">
          <div className="category-image">
            <img src="sedan.jpg" alt="Sedan" />
          </div>
          <h3>Sedan</h3>
          <p>Conforto e espaço para a família</p>
          <button className="choose-button">Escolher</button>
        </div>

        <div className="category-card">
          <div className="category-image">
            <img src="suv.jpg" alt="SUV" />
          </div>
          <h3>SUV</h3>
          <p>Potência e robustez para qualquer terreno</p>
          <button className="choose-button">Escolher</button>
        </div>
      </div>
    </div>
  );
};

export default Escolha;
