import styled from 'styled-components';
import { Dialog as DialogContainer, DialogContentText, DialogTitle } from '@mui/material';

export const Dialog = styled(DialogContainer)`
  .MuiPaper-root {
    background-color: ${({ theme }) => theme.palette.primary.main};
    color: ${({ theme }) => theme.palette.common.white};
  }

  .MuiDialogContent-root p {
    color: ${({ theme }) => theme.palette.common.white};
  }
`;

export const StyledTitle = styled(DialogTitle)`
  font-size: ${({ theme }) => theme.spacing(3)}px !important;
`;

export const ImageContainer = styled.div<{ $imageLink: string }>`
  width: 100%;
  border-radius: ${({ theme }) => theme.spacing(0.5)}px;
  height: ${({ theme }) => theme.spacing(39)}px;
  background-image: url(${({ $imageLink }) => $imageLink});
  background-repeat: no-repeat;
  background-size: contain;
  margin-bottom: ${({ theme }) => theme.spacing(2)}px;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing(2)}px;

  p {
    font-size: ${({ theme }) => theme.spacing(1.7)}px !important;
    display: flex;
    align-items: center;
  }
`;

export const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: ${({ theme }) => theme.spacing(0.5)}px;
`;

export const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledDialogText = styled(DialogContentText)`
  color: ${({ theme }) => theme.palette.primary.light} !important;
  margin-right: ${({ theme }) => theme.spacing(0.5)}px !important;
`;

export const AboutTitle = styled(DialogContentText)`
  margin: ${({ theme }) => theme.spacing(3)}px 0 ${({ theme }) => theme.spacing(1)}px 0 !important;
  font-size: ${({ theme }) => theme.spacing(3)}px !important;
`;
