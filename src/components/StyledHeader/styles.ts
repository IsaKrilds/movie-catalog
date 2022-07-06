import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100%;
  min-height: ${({ theme }) => theme.spacing(10)}px;
  background-image: linear-gradient(black, #141414);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${({ theme }) => theme.spacing(10)}px;
`;

export const StyledImg = styled.img`
  width: 100px;
`;
