import React from 'react';
import { InputAdornment, Stack } from '@mui/material';
import { StyledTextField } from './styles';
import { Search } from '@material-ui/icons';

const StyledSearchBar: React.FC = () => {
  return (
    <Stack spacing={1} sx={{ width: 300 }}>
      <StyledTextField
        label="Search"
        style={{ color: '#fff' }}
        variant="standard"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Search style={{ color: '#fff' }} />
            </InputAdornment>
          ),
        }}
      />
    </Stack>
  );
};

export default StyledSearchBar;
