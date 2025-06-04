import React, { useState, useRef, useEffect } from 'react';
import { User, LogOut } from 'lucide-react';

const UserDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    window.location.href = '/login'; 
  };

  // Fechar dropdown quando clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown" ref={dropdownRef}>
      {/* Ícone do usuário clicável */}
      <button
        onClick={toggleDropdown}
        className="btn btn-muted p-2"
        type="button"
        aria-label="Menu do usuário"
      >
        <User size={30} className="text-dark" />
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="dropdown-menu show position-absolute end-0 mt-2" style={{ zIndex: 1050 }}>
          <button
            onClick={handleLogout}
            className="dropdown-item d-flex align-items-center"
            type="button"
          >
            <LogOut size={16} className="me-2" />
            Sair
          </button>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;