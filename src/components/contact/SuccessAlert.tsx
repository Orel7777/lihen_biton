import React from 'react';
import styled from 'styled-components';

interface SuccessAlertProps {
  isOpen: boolean;
  onClose: () => void;
}

const AlertOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const AlertContent = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  border: 2px solid black;
  max-width: 90%;
  width: 400px;
  text-align: center;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: black;
  
  &:hover {
    opacity: 0.7;
  }
`;

const Title = styled.h2`
  color: black;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const Message = styled.p`
  color: black;
  font-size: 1rem;
  margin-bottom: 1.5rem;
`;

const SuccessIcon = styled.div`
  color: #22c55e;
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const CloseButtonBottom = styled.button`
  background-color: black;
  color: white;
  padding: 0.5rem 2rem;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  
  &:hover {
    opacity: 0.9;
  }
`;

export const SuccessAlert: React.FC<SuccessAlertProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AlertOverlay>
      <AlertContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <SuccessIcon>✓</SuccessIcon>
        <Title>הפנייה נשלחה בהצלחה!</Title>
        <Message>תודה שפנית אלינו, נחזור אליך בהקדם האפשרי!</Message>
        <Message>הודעת נשלחה לכתובת: lihenb84@gmail.com</Message>
        <CloseButtonBottom onClick={onClose}>סגור</CloseButtonBottom>
      </AlertContent>
    </AlertOverlay>
  );
}; 