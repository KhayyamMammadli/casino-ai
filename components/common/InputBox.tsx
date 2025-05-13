import React from 'react';
import { Input, Button as AntButton } from 'antd';


interface InputBoxProps {
  value: string;
  onChange: (val: string) => void;
  onSend?: () => void;
  placeholder?: string;
}

const InputBox: React.FC<InputBoxProps> = ({ value, onChange, onSend, placeholder }) => {
  const handleClear = () => onChange('');

  return (
    <Input
      placeholder={placeholder}
      className="custom-input"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      suffix={
        <>
          <AntButton
            type="primary"
            shape="circle"
            onClick={onSend}
            disabled={!value.trim()}
          />
        </>
      }
    />
  );
};

export default InputBox;
