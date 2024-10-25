import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Importando useNavigate
import './Patios.css';

function Patios() {
  const navigate = useNavigate(); // Inicializando o hook
  const [yards, setYards] = useState([
    { id: 1, name: 'Pátio Central', count: 15, color: 'var(--turquoise)' },
    { id: 2, name: 'Pátio Sul', count: 8, color: 'var(--orange)' },
    { id: 3, name: 'Pátio Norte', count: 3, color: 'var(--purple)' },
  ]);
  const [notification, setNotification] = useState('');

  const showYardDetails = (yardId) => {
    setNotification(`Carregando detalhes do Pátio ${yardId}...`);
    setTimeout(() => {
      setNotification('');
      // Navegando para a rota do pátio
      navigate(yardId === 1 ? '/patio-central' : `/yard/${yardId}`);
    }, 2000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setYards((prevYards) =>
        prevYards.map((yard) => {
          const newCount = Math.max(0, yard.count + Math.floor(Math.random() * 3) - 1);
          return { ...yard, count: newCount };
        })
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">

      <h1 className="title">AutoRent 🚗</h1>
      <div className="yard-grid">
        {yards.map((yard) => (
          <div key={yard.id} className="yard-card" onClick={() => showYardDetails(yard.id)}>
            <svg className="yard-icon" viewBox="0 0 24 24">
              <path fill={yard.color} d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8Z" />
            </svg>
            <h2 className="yard-name">{yard.name}</h2>
            <p>Veículos disponíveis: <span className="count">{yard.count}</span></p>
            <div className="stock-indicator">
              <span className={`stock-dot ${yard.count > 10 ? 'stock-high' : yard.count > 5 ? 'stock-medium' : 'stock-low'}`}></span>
              {yard.count > 10 ? ' Estoque Normal' : yard.count > 5 ? ' Estoque Moderado' : ' Estoque Baixo'}
            </div>
          </div>
        ))}
      </div>
      {notification && <div className="notification show">{notification}</div>}
    </div>  
  );
}

export default Patios;