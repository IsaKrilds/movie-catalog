import React from 'react';
import { ThemeProvider as MaterialThemeProvider } from '@material-ui/core';
// eslint-disable-next-line import/named
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import theme, { styledTheme } from '../../styles/theme';

type WrapperProps = {
  children: React.ReactNode;
};

interface GenerateBasicProvidersProps {
  useMemoryRouter?: boolean;
  useAuthContext?: boolean;
}

/**
 * Helper that fakes a successful fetch request data. Made to be used with mocked axios.
 * Example: mockedAxios.get.mockImplementation(() => fakeSuccessFetch(MY_RESPONSE_BODY))
 */
const fakeSuccessFetch = (data: any) => {
  new Promise((resolve) => {
    setTimeout(
      () =>
        resolve({
          data,
        }),
      50
    );
  });
};

const GenerateBasicProviders = ({
  useMemoryRouter = true,
}: GenerateBasicProvidersProps): React.FC => {
  const BasicProviders: React.FC = ({ children }: any) => {
    const Wrappers = [];

    Wrappers.push(({ children: wrapperChildren }: WrapperProps) => (
      <MaterialThemeProvider theme={theme}>{wrapperChildren}</MaterialThemeProvider>
    ));

    Wrappers.push(({ children: wrapperChildren }: WrapperProps) => (
      <StyledThemeProvider theme={styledTheme}>{wrapperChildren}</StyledThemeProvider>
    ));

    if (useMemoryRouter)
      Wrappers.push(({ children: wrapperChildren }: WrapperProps) => (
        <Router>{wrapperChildren}</Router>
      ));

    return Wrappers.reduce((prev, Component) => {
      prev = <Component>{prev}</Component>;
      return prev;
    }, children) as React.ReactElement;
  };
  return BasicProviders;
};

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'queries'> & GenerateBasicProvidersProps
): RenderResult =>
  render(ui, {
    wrapper: GenerateBasicProviders({
      useMemoryRouter: options?.useMemoryRouter,
    }),
    ...options,
  });

// re-export everything
// eslint-disable-next-line import/export
export * from '@testing-library/react';

// override render method
// eslint-disable-next-line import/export
export { customRender as render, fakeSuccessFetch };
