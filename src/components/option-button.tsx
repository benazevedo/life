import React from 'react';
import './option-button.css';

interface IOptionButton {
  label: string;
  selected: boolean; // New prop for selection
  onClick: () => void; // New prop for click handling
}

const OptionButton = ({ label, selected, onClick }: IOptionButton) => {
  return (
    <div
      className={`option-button ${selected ? 'selected' : ''}`}
      onClick={onClick}
    >
      {label}
    </div>
  );
};

export default OptionButton;
