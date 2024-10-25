import React, { useState } from 'react';
import './PatioNorte.css';

function PatioNorte() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState('');

  const openModal = (car) => {
    setSelectedCar(car);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedCar('');
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    alert('Locação realizada com sucesso!');
    closeModal();
  };

  return (
    <div className="container">
      <header className="header">
        <a href="/" className="back-button">← Voltar para Pátios</a>
        <h1>Pátio Norte - Veículos Disponíveis</h1>
      </header>

      <div className="car-grid">
        <CarCard car="Fiat Cronos" price="R$ 280/dia" available onClick={() => openModal('Fiat Cronos')} />
        <CarCard car="Volkswagen Gol" price="R$ 120/dia" />
        <CarCard car="Chevrolet Onix Plus" price="R$ 280/dia" available onClick={() => openModal('Chevrolet Onix Plus')} />
      </div>

      {modalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Formulário de Locação</h2>
            <form onSubmit={handleFormSubmit}>
              <FormInput label="Nome Completo" required />
              <FormInput label="CPF" required pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" />
              <FormInput label="Telefone" required />
              <FormInput label="E-mail" required type="email" />
              <div className="form-actions">
                <button type="button" onClick={closeModal}>Cancelar</button>
                <button type="submit">Confirmar Locação</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

function CarCard({ car, price, available, onClick }) {
  return (
    <div className="car-card" onClick={available ? onClick : null}>
      <div className={`car-image ${available ? 'available' : 'rented'}`}>
        <span className={`availability-tag ${available ? 'available' : 'rented'}`}>
          {available ? 'Disponível' : 'Alugado'}
        </span>
      </div>
      <h3>{car}</h3>
      <div className="car-price">{price}</div>
      <button disabled={!available} className="rent-button">
        {available ? 'Alugar Agora' : 'Indisponível'}
      </button>
    </div>
  );
}

function FormInput({ label, ...props }) {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input {...props} />
    </div>
  );
}

export default PatioNorte;
