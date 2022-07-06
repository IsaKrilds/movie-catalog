import React from 'react';
import { ThemeProvider, StylesProvider } from '@material-ui/core/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import theme, { styledTheme } from './styles/theme';
import GlobalStyle from './styles/globalStyle';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/Routes';

const App: React.FC = () => {
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <StyledThemeProvider theme={styledTheme}>
          <GlobalStyle />
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </StyledThemeProvider>
      </ThemeProvider>
    </StylesProvider>
  );
};

export default App;
