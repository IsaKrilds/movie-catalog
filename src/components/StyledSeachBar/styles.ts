import styled from 'styled-components';
import { TextField } from '@mui/material';

export const Container = styled.div`
  width: ${({ theme }) => theme.spacing(30)}px;
`;

export const StyledTextField = styled(TextField)`
  width: 100%;
  & label:not(.Mui-error) {
    color: ${({ theme }) => theme.palette.common.white};
  }
  & input {
    color: ${({ theme }) => theme.palette.common.white};
  }
  & textarea {
    color: ${({ theme }) => theme.palette.common.white};
  }
  & label {
    color: #fff;
  }
  & label.Mui-focused {
    color: #fff;
  }
  & .MuiInput-underline:after {
    border-bottom-color: #fff;
  }
  & .MuiOutlinedInput-root {
    & fieldset {
      border-color: #fff;
    }
    &:hover fieldset {
      border-color: #fff;
      border-width: 2;
    }
    &.Mui-focused fieldset {
      border-color: #fff;
    }
  }
`;

export const StyledSubmitButton = styled.button`
  background-color: transparent;
  border: none;
  box-shadow: none;
  color: ${({ theme }) => theme.palette.common.white} !important;

  :hover {
    cursor: pointer;
  }
`;
