import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/img/logo.jpg';
import AboutModal from '../components/aboutModal';

function Login() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  return (
    <div
      className="d-flex flex-column align-items-center justify-content-top vh-100 vw-100"
      style={{ backgroundColor: '#5d0c1d' }}
    >
      <div className="w-100 d-flex justify-content-end align-items-center">
        <button
          className="btn btn-md text-black mt-2 me-4"
          style={{ backgroundColor: '#f5e7d0', width: '8%', height: '80%' }}
          onClick={() => setShowModal(true)}
        >
          Sobre
        </button>
      </div>

      <AboutModal isOpen={showModal} onClose={() => setShowModal(false)} />

      <img src={logo} alt="Logo" className="my-4" />

      <div className="p-5 bg-light shadow rounded-3" style={{ minWidth: '500px' }}>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Senha</label>
          <input type="password" className="form-control" />
        </div>
        <button className="btn btn-primary w-100" onClick={() => navigate('/home')}>
          Entrar
        </button>
      </div>
    </div>
  );
}

export default Login;
