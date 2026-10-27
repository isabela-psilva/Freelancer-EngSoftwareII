import React from 'react';
import './Modal.css';

interface ModalProps {
  isOpen: boolean;
  message: string;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, message, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="custom-modal-overlay">
      <div className="custom-modal-card">
        <p className="custom-modal-message">{message}</p>
        <button className="custom-modal-btn" onClick={onClose}>
          OK
        </button>
      </div>
    </div>
  );
};

export default Modal;