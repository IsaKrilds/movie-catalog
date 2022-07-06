import React from 'react';
import StyledSearchBar from '../StyledSeachBar';
import { Container, StyledImg } from './styles';
import logo from '../../assets/images/logo.png';

const StyledHeader: React.FC = () => {
  return (
    <Container>
      <StyledImg src={logo} alt="logo movie" />
      <StyledSearchBar />
    </Container>
  );
};

export default StyledHeader;
