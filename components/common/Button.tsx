import React from 'react';
import { Button as AntButton } from 'antd';


interface ButtonProps {
  text: string;
  onClick?: () => void;
  selected?: boolean;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, selected, disabled }) => {
  return (
    <AntButton
      type={selected ? 'primary' : 'default'}
      block
      disabled={disabled}
      className="custom-button"
      onClick={onClick}
    >
      {text}
    </AntButton>
  );
};

export default Button;