import React from 'react';

const Card = ({
  imageUrl,
  imageAlt,
  title,
  walkingText,
  smallText,
  largeText,
  href,
  className = ''
}) => {
  return (
    <a 
      href={href} 
      className={`card text-decoration-none ${className}`}
      style={{ 
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        border: '1px solid #dee2e6',
        borderRadius: '0.375rem',
        overflow: 'hidden',
        color: 'inherit'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.12)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.12)';
      }}
    >
      <img 
        src={imageUrl} 
        className="card-img-top" 
        alt={imageAlt}
        style={{ 
          height: '200px', 
          objectFit: 'cover',
          width: '100%'
        }}
      />
      <div className="card-body">
        <h5 className="card-title mb-3" style={{ color: '#212529' }}>
          {title}
        </h5>
        
        <div className="d-flex align-items-center mb-3">
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
            <circle cx="12" cy="5" r="1"/>
            <path d="m9 20 3-6 3 6"/>
            <path d="m6 8 6 2 6-2"/>
          </svg>
          <span style={{ color: '#6c757d', fontSize: '0.9rem' }}>
            {walkingText}
          </span>
        </div>
        
        <div className="d-flex align-items-center justify-content-between">
          <span style={{ color: '#6c757d', fontSize: '0.8rem' }}>
            {smallText}
          </span>
          <span style={{ color: '#212529', fontSize: '1.1rem', fontWeight: '600' }}>
            {largeText}
          </span>
        </div>
      </div>
    </a>
  );
};

export default Card;