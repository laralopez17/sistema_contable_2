import React from 'react';
import "../styles/Button.css";

const Button = ({ onClick, label }) => {
  return (
    <button 
        className="button"
        onClick={onClick}>
        {label}
    </button>
  );
};

export default Button;
