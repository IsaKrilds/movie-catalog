import styled from 'styled-components';
import { TextField } from '@mui/material';

export const Container = styled.div`
  width: ${({ theme }) => theme.spacing(30)}px;
`;

export const StyledTextField = styled(TextField)`
  & label:not(.Mui-error) {
    color: ${({ theme }) => theme.palette.common.white};
  }
  & input {
    color: ${({ theme }) => theme.palette.common.white};
  }
  & textarea {
    color: ${({ theme }) => theme.palette.common.white};
  }
  & .MuiInputAdornment-root .MuiIconButton-label {
    color: ${({ theme }) => theme.palette.common.white};
  }
  & .MuiInputAdornment-root .MuiIconButton-label {
    color: ${({ theme }) => theme.palette.common.white};
  }
  & .MuiInput-root:not(.Mui-error) {
    & fieldset {
      border-color: ${({ theme }) => theme.palette.common.white};
      color: ${({ theme }) => theme.palette.common.white};
    }
    &:hover fieldset {
      border-color: ${({ theme }) => theme.palette.common.white};
      color: ${({ theme }) => theme.palette.common.white};
    }
    &.Mui-focused fieldset {
      border-color: ${({ theme }) => theme.palette.common.white};
      color: ${({ theme }) => theme.palette.common.white};
    }
  }

  button {
    color: ${({ theme }) => theme.palette.common.white} !important;
  }
`;
