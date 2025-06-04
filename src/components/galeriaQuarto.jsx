import React from 'react';
import '../styles/GaleriaQuarto.css';
import mapa from '../assets/img/mapa.jpg';
function GaleriaQuarto({ images }) {
  return (
    <div className="container-fluid d-flex shadow-lg rounded overflow-hidden" style={{ height: '24rem', width: '95%' }}>
      <div className="position-relative" style={{ flex: '1' }}>
        <div className="h-100 w-100 position-relative overflow-hidden">
          <img
            src={mapa}
            alt="Mapa"
            className="w-100 h-100 object-fit-cover"
          />
          <div className="position-absolute top-0 start-0 w-100 h-100 bg-gradient" />
          <div className="position-absolute bottom-0 start-0 text-white p-2">
            <h5 className="fw-bold">MAPA</h5>
            <p className="small">Explorar Região</p>
          </div>
          <div className="position-absolute top-0 end-0 m-2 bg-danger rounded-circle" style={{ width: '10px', height: '10px' }} />
        </div>
      </div>
      <div className="d-flex" style={{ flex: '4' }}>
        {images.map((image, index) => (
          <div key={image.id} className="position-relative gallery-item" style={{ flex: 1, overflow: 'hidden' }}>
            <img
              src={image.src}
              alt={image.alt}
              className="w-100 h-100 object-fit-cover gallery-img"
            />
            <div className="overlay-caption d-flex flex-column justify-content-end p-3">
              <div className="text-white">
                <h6 className="mb-1 fw-bold">{image.alt}</h6>
                <p className="small mb-0">{image.caption}</p>
              </div>
            </div>
            {index < images.length - 1 && (
              <div className="position-absolute top-0 end-0 bg-light" style={{ width: '1px', height: '100%', opacity: 0.2 }} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default GaleriaQuarto;

