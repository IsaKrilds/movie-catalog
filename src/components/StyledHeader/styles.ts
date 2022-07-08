import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100%;
  min-height: ${({ theme }) => theme.spacing(10)}px;
  background-image: linear-gradient(
    ${({ theme }) => theme.palette.common.black},
    ${({ theme }) => theme.palette.primary.main}
  );
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${({ theme }) => theme.spacing(10)}px;
`;

export const StyledImg = styled.img`
  width: 100px;
`;

export const OptionsContainer = styled.div``;

export const StyledOptionItem = styled.span`
  color: ${({ theme }) => theme.palette.common.white};
  margin-left: ${({ theme }) => theme.spacing(4)}px;

  :hover {
    cursor: pointer;
  }
`;
