// CustomSwitch.tsx
import React from 'react';
import Form from 'react-bootstrap/Form';

interface CustomSwitchProps {
  name: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const CustomSwitch: React.FC<CustomSwitchProps> = ({ name, checked, onChange }) => {
  return (
    <Form.Check
      type="switch"
      id={`custom-switch-${name}`}
      
      checked={checked}
      onChange={(e) => onChange(e.target.checked)}
    />
  );
};

export default CustomSwitch;
