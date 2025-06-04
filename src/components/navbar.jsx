import React, { useState } from 'react';
import { Search, Home, User } from 'lucide-react';
import UserDropdown from './userDropdown';
import AboutModal from './aboutModal';
const Navbar = () => {
  const [searchValue, setSearchValue] = useState('');
  const [showModal, setShowModal] = useState(false);
  const handleSearch = () => {
    console.log('Search clicked:', searchValue);
  };

  const handleQuickAction = (action) => {
    console.log('Quick action:', action);
  };

  return (
    <nav className="navbar navbar-expand-lg shadow rounded-bottom" style={{ backgroundColor: '#ccb38d', minHeight: '130px' }}>
      <div className="d-flex justify-content-around w-100" style={{ minHeight: '120px' }}>
        {/* Logo/Brand - Start */}
        <div className="navbar-brand d-flex" style={{ width: '10%' }}>
          <div className="rounded p-2 me-3" style={{ color: '#5d0c1d' }}>
            <Home size={30} />
          </div>
          <span className="fs-4 fw-bold mt-2" style={{ color: '#5d0c1d', fontFamily: 'cursive' }}>HomeWay</span>
        </div>

        {/* Search Section - Middle */}
        <div className="flex-grow-1 me-4" style={{ maxWidth: '600px' }}>
          <div className="position-relative">
            {/* Large Search Input */}
            <div className="position-relative mb-3">
              <input
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search for anything..."
                className="form-control form-control-lg border-2 rounded-3 ps-5"
                style={{ height: '56px', fontSize: '18px' }}
              />
              <Search
                className="position-absolute text-muted"
                size={20}
                style={{ left: '16px', top: '50%', transform: 'translateY(-50%)' }}
              />
            </div>

            {/* Three Buttons Below Input */}
            <div className="d-flex gap-2 justify-content-center">
              <button
                onClick={() => handleQuickAction('popular')}
                className="btn btn-sm d-flex text-white justify-content-center align-items-center"
                style={{ backgroundColor: '#5d0c1d', width: '15%' }}
              >
                Brasil
              </button>
              <button
                onClick={() => handleQuickAction('categories')}
                className="btn btn-sm d-flex text-white justify-content-center align-items-center"
                style={{ backgroundColor: '#5d0c1d' }}
              >
                Estados Unidos
              </button>
              <button
                onClick={handleSearch}
                className="btn btn-sm d-flex text-white justify-content-center align-items-center"
                style={{ backgroundColor: '#5d0c1d', width: '15%' }}
              >
                Portugal
              </button>
            </div>
          </div>
        </div>

        {/* About Button - End */}
        <div className="d-flex align-items-start">
          <button
            className="btn btn-md text-white mt-2 me-2"
            style={{ backgroundColor: '#5d0c1d' }}
            onClick={() => setShowModal(true)}
          >
            Sobre
          </button>
          <AboutModal isOpen={showModal} onClose={() => setShowModal(false)} />
          <UserDropdown />
        </div>

      </div>
    </nav>
  );
};

export default Navbar;