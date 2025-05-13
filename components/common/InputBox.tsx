import React from 'react';
import { Input, Button as AntButton } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';

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
          {value && (
            <CloseCircleOutlined
              onClick={handleClear}
              style={{ marginRight: 8, cursor: 'pointer', color: '#999' }}
            />
          )}
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
