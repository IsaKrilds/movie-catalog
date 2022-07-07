import styled from 'styled-components';
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';
import { Typography } from '@mui/material';

export const Carousel = styled(ResponsiveCarousel)`
  max-width: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100% - ${({ theme }) => theme.spacing(20)}px;
  padding-left: ${({ theme }) => theme.spacing(10)}px;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: ${({ theme }) => theme.spacing(4)}px 0 ${({ theme }) => theme.spacing(3)}px 0;
`;

export const SectionTitle = styled(Typography)`
  color: ${({ theme }) => theme.palette.common.white};
`;
