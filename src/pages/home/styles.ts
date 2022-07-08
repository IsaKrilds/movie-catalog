import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100%;
  background-color: ${({ theme }) => theme.palette.primary.main};
`;
