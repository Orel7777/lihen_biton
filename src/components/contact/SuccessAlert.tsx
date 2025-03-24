import React from 'react';
import styled from 'styled-components';

interface SuccessAlertProps {
  onDismiss: () => void;
}

export const SuccessAlert: React.FC<SuccessAlertProps> = ({ onDismiss }) => {
  return (
    <StyledWrapper>
      <div className="notifications-container">
        <div className="success">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="succes-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="success-prompt-wrap">
              <p className="success-prompt-heading">הטופס נשלח בהצלחה!</p>
              <div className="success-prompt-prompt">
                <p>תודה שפנית אלינו, נחזור אליך בהקדם האפשרי!</p>
              </div>
              <div className="success-button-container">
                <button type="button" className="success-button-secondary" onClick={onDismiss}>
                  סגור
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .notifications-container {
    width: 100%;
    height: auto;
    font-size: 0.875rem;
    line-height: 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .flex {
    display: flex;
  }

  .flex-shrink-0 {
    flex-shrink: 0;
  }

  .success {
    padding: 1rem;
    border-radius: 0.375rem;
    background-color: rgb(240 253 244);
  }

  .succes-svg {
    color: rgb(74 222 128);
    width: 1.25rem;
    height: 1.25rem;
  }

  .success-prompt-wrap {
    margin-right: 0.75rem;
  }

  .success-prompt-heading {
    font-weight: bold;
    color: rgb(22 101 52);
  }

  .success-prompt-prompt {
    margin-top: 0.5rem;
    color: rgb(21 128 61);
  }

  .success-button-container {
    display: flex;
    margin-top: 0.875rem;
    margin-bottom: -0.375rem;
    margin-left: -0.5rem;
    margin-right: -0.5rem;
    justify-content: flex-end;
  }

  .success-button-secondary {
    padding-top: 0.375rem;
    padding-bottom: 0.375rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    margin-left: 0.75rem;
    background-color: #ECFDF5;
    color: #065F46;
    font-size: 0.875rem;
    line-height: 1.25rem;
    border-radius: 0.375rem;
    border: none;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  .success-button-secondary:hover {
    background-color: #D1FAE5;
  }
`; 