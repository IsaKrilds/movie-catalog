import React from 'react';
import { Select, InputLabel, MenuItem } from '@mui/material';
import { StyledFormControl } from './styles';

export interface SelectProps {
  label: string;
  value?: number;
  children?: React.ReactNode;
  size?: 'small';
  onChange: (e: any) => void;
}

const StyledSelectInput: React.FC<SelectProps> = ({
  label,
  children,
  size,
  value,
  onChange,
  ...props
}) => {
  return (
    <StyledFormControl size="small" style={{ width: '200px' }}>
      <InputLabel id="select-label">{label}</InputLabel>
      <Select
        labelId="select-label"
        variant="outlined"
        label={label}
        value={value}
        onChange={onChange}
        {...props}>
        <MenuItem value={0} disabled>
          ...
        </MenuItem>
        {children}
      </Select>
    </StyledFormControl>
  );
};

export default StyledSelectInput;
