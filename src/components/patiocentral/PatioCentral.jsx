import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importando useNavigate
import './PatioCentral.css';

function PatioCentral() {
  const navigate = useNavigate(); // Inicializando o hook
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
        <button onClick={() => navigate('/')} className="back-button">← Voltar para Pátios</button>
        <h1>Pátio Central - Veículos Disponíveis</h1>
      </header>

      <div className="car-grid">
        <CarCard car="Honda CiviHyundai HB20c 2023" price="R$ 150/dia" available onClick={() => openModal('Hyundai HB20')} />
        <CarCard car="Fiat Mobi" price="R$ 280/dia" />
        <CarCard car="Renault Kwid" price="R$ 450/dia" available onClick={() => openModal('Renault Kwid')} />
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

export default PatioCentral;
