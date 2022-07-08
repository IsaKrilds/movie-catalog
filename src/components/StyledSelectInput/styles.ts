import { FormControl } from '@mui/material';
import styled from 'styled-components';

export const StyledFormControl = styled(FormControl)`
  & .MuiInputBase-root {
    color: ${({ theme }) => theme.palette.common.white};
  }
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
  & .MuiOutlinedInput-root:not(.Mui-error) {
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

  .MuiSvgIcon-root {
    color: ${({ theme }) => theme.palette.common.white};
  }
`;
