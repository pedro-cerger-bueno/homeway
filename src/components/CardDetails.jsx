import React from 'react';
import { Bath, BedSingle, BookOpenCheck, DollarSign } from 'lucide-react';

function CardDetails({ cardData }) {
  const iconMap = {
    Bath: <Bath size={20} className="text-muted me-2" />,
    BedSingle: <BedSingle size={20} className="text-muted me-2" />,
    BookOpenCheck: <BookOpenCheck size={20} className="text-muted me-2" />,
    DollarSign: <DollarSign size={20} className="text-muted me-2" />,
  };

  if (!cardData) return null;

  const { title, walkingText, services = [] } = cardData;

  return (
    <div className="row justify-content-start ms-4 col-8">
      <div className="col-lg-9">
        <div className="bg-white rounded p-4 shadow-sm">
          <h4 className="mb-0" style={{ color: '#212529' }}>{title}</h4>
          <div className="d-flex align-items-center mb-4">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="me-2"
              style={{ color: '#6c757d' }}
            >
              <circle cx="12" cy="5" r="1" />
              <path d="m9 20 3-6 3 6" />
              <path d="m6 8 6 2 6-2" />
            </svg>
            <span style={{ color: '#6c757d', fontSize: '0.9rem' }}>{walkingText}</span>
          </div>
          <div className="mb-4">
            <h6 className="text-primary mb-3">Oferece:</h6>
            <div className="row g-3">
              {services.map((service, index) => (
                <div key={index} className="col-md-6">
                  <div className="d-flex align-items-center">
                    {iconMap[service.icon]}
                    <span style={{ fontSize: '1rem', color: '#495057' }}>{service.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDetails;