import React from 'react';

function BookingCard({ averageValue }) {
  const handleRentClick = () => {
    console.log('Botão de alugar clicado');
  };

  return (
    <div className="row col-3 ms-4 bg-white rounded p-4 shadow-sm">
      <div className="text-center mb-4">
        <h5 className="mb-2" style={{ color: '#212529' }}>Valor da Diária</h5>
        <div className="mb-2">
          <span style={{ color: '#212529', fontSize: '2rem', fontWeight: 'bold' }}>
            R$ {averageValue},00
          </span>
          <span style={{ color: '#6c757d', fontSize: '0.9rem' }}> / noite</span>
        </div>
      </div>

      <button 
        className="btn btn-primary w-100 py-2"
        onClick={handleRentClick}
        style={{ fontSize: '1.1rem', fontWeight: '600' }}
      >
        Alugar Agora
      </button>

      <div className="text-center mt-3">
        <small style={{ color: '#6c757d' }}>
          Você não será cobrado ainda
        </small>
      </div>
    </div>
  );
}

export default BookingCard;
