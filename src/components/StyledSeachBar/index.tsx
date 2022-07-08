import React, { useState } from 'react';
import { InputAdornment, Stack } from '@mui/material';
import { StyledTextField, StyledSubmitButton } from './styles';
import { Search } from '@material-ui/icons';
import { useNavigate } from 'react-router';
import queryString from 'query-string';

const StyledSearchBar: React.FC = () => {
  const [searchValue, setSearchValue] = useState() as any;

  const navigate = useNavigate();

  const handleChange = (e: any) => {
    setSearchValue(e.target.value);
  };

  const handleSearch = (e: any) => {
    e.preventDefault();
    const query = queryString.stringify({ query: searchValue });

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    searchValue !== '' ? navigate(`/search?${query}`) : navigate(`/home`);
  };

  return (
    <Stack spacing={1} sx={{ width: 300 }}>
      <form onSubmit={handleSearch}>
        <StyledTextField
          label="Search"
          style={{ color: '#fff' }}
          variant="standard"
          onChange={handleChange}
          type="search"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <StyledSubmitButton type="submit">
                  <Search style={{ color: '#fff' }} />
                </StyledSubmitButton>
              </InputAdornment>
            ),
          }}
        />
      </form>
    </Stack>
  );
};

export default StyledSearchBar;
