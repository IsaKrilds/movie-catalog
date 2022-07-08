import React from 'react';
import StyledSearchBar from '../StyledSeachBar';
import { Container, StyledImg, OptionsContainer, StyledOptionItem } from './styles';
import logo from '../../assets/images/logo.png';
import { useLocation, useNavigate } from 'react-router-dom';

const StyledHeader: React.FC = () => {
  const headerOptions = [
    { title: 'Home', path: '/home' },
    { title: 'Browse by Genres', path: '/browse-by-genre' },
  ];
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <Container>
      <OptionsContainer>
        <StyledImg src={logo} alt="logo movie" />
        {headerOptions.map((item: any, index: number) => (
          <StyledOptionItem
            onClick={() => navigate(item.path)}
            style={pathname === item.path ? { fontWeight: 'bold' } : {}}
            key={index}>
            {item.title}
          </StyledOptionItem>
        ))}
      </OptionsContainer>
      <StyledSearchBar />
    </Container>
  );
};

export default StyledHeader;
