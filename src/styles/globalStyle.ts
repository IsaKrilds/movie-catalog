import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html, body, #root {
    height: 100%;
    margin: 0px;
    font-family: 'Work Sans', 'Helvetica';
    background-color: ${({ theme }) => theme.palette.primary.main};
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s,
    color 5000s ease-in-out 0s;
    transition-delay: background-color 5000s, color 5000s;
  }
`;
