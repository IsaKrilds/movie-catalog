import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100%;
  background-color: ${({ theme }) => theme.palette.primary.main};
`;

export const FiltersContainer = styled.div`
  max-width: 100%;
  min-height: ${({ theme }) => theme.spacing(10)}px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0 ${({ theme }) => theme.spacing(10)}px;
`;
