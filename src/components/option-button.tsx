import React, { useState } from 'react';
import './option-button.css';

interface IOptionButton {
  label: string;
}

const OptionButton = ({ label }: IOptionButton) => {
  const handleClick = () => {};

  return (
    <div className="option-button" onClick={handleClick}>
      {label}
    </div>
  );
};

export default OptionButton;
