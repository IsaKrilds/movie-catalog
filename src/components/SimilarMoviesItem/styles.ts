import { Typography } from '@mui/material';
import styled from 'styled-components';

export const Container = styled.div`
  width: 250px;
  min-height: 350px;
  background-color: ${({ theme }) => theme.palette.primary.light};
  transition: 0.3s ease-in-out;
  border-radius: ${({ theme }) => theme.spacing(0.5)}px;
  margin: ${({ theme }) => theme.spacing(2)}px 0;

  &:hover {
    transform: scale(1.05);
  }

  color: ${({ theme }) => theme.palette.common.white};
`;

export const ImageContainer = styled.div<{ $imageLink: string }>`
  width: 100%;
  height: 150px;
  border-radius: ${({ theme }) => theme.spacing(0.5)}px
    ${({ theme }) => theme.spacing(0.5)}px 0 0;
  background-image: url(${({ $imageLink }) => $imageLink});
  background-repeat: no-repeat;
  background-size: contain;
`;

export const StyledContentContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  padding: 0 10px 10px 10px;
  word-break: break-all;
`;

export const StyledTitle = styled(Typography)`
  margin-bottom: ${({ theme }) => theme.spacing(1)}px !important;
`;
