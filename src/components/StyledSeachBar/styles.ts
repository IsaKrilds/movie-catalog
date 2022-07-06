import styled from 'styled-components';
import { TextField } from '@mui/material';

export const Container = styled.div`
  width: ${({ theme }) => theme.spacing(30)}px;
`;

export const StyledTextField = styled(TextField)`
  & label:not(.Mui-error) {
    color: #fff;
  }
  & input {
    color: #fff;
  }
  & textarea {
    color: #fff;
  }
  & .MuiInputAdornment-root .MuiIconButton-label {
    color: #fff;
  }
  & .MuiInputAdornment-root .MuiIconButton-label {
    color: #fff;
  }
  & .MuiOutlinedInput-root:not(.Mui-error) {
    & fieldset {
      border-color: #fff;
      color: #fff;
    }
    &:hover fieldset {
      border-color: #fff;
      color: #fff;
    }
    &.Mui-focused fieldset {
      border-color: #fff;
      color: #fff;
    }
  }

  button {
    color: #fff !important;
  }
`;
