import React, { useEffect } from 'react';
import { X } from 'lucide-react';

const AboutModal = ({ isOpen, onClose }) => {
  // Impede scroll quando o modal estiver aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop escuro */}
      <div
        className="modal-backdrop show"
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1040
        }}
        onClick={onClose}
      />

      {/* Modal content */}
      <div
        className="modal d-block"
        tabIndex="-1"
        role="dialog"
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1050,
        }}
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content shadow-lg">
            <div className="modal-header">
              <h5 className="modal-title fw-bold text-primary">Sobre nós</h5>
              <button
                type="button"
                className="btn-close"
                onClick={onClose}
                style={{ border: 'none', background: 'transparent' }}
              >
                <X />
              </button>
            </div>
            <div className="modal-body">
              <p className="text-muted fs-5">
                Na Homeway, facilitamos a vida de estudantes intercambistas na hora de
                encontrar um lar em um novo país. Nosso objetivo é eliminar a burocracia
                e oferecer um processo simples, seguro e acolhedor. Oferecemos suporte
                completo com tradução, localização e auxílio com contratos, garantindo
                que cada etapa da mudança seja tranquila e sem surpresas. Mais do que
                alugar um imóvel, queremos proporcionar uma experiência positiva para
                estudantes e anfitriões — com confiança, praticidade e suporte de ponta a
                ponta.
              </p>
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutModal;
