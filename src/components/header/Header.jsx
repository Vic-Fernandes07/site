import React from 'react';
import './Header.css'; 

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-title">
        <h1>AutoRent Plus <span role="img" aria-label="car">🚗</span></h1>
      </div>
      <div className="search-bar">
        <input
          type="text"
          className="input-location"
          placeholder="Digite o local de retirada"
        />
        <input
          type="date"
          className="input-date"
        />
        <input
          type="time"
          className="input-time"
        />
      </div>
    </div>
  );
};

export default Header;
