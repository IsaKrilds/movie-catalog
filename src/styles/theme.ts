/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line import/named
import { createTheme, Theme } from '@material-ui/core/styles';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {
    palette: typeof styledTheme.palette;
  }
}

const theme = createTheme({
  palette: {},
  typography: {
    fontFamily: 'Work Sans',
    fontSize: 16,
  },
  spacing: 8,
  overrides: {
    MuiButton: {
      root: {
        borderRadius: '9px',
        textTransform: 'unset',
      },
    },
    MuiTab: {
      root: {
        textTransform: 'unset',
      },
    },
  },
});

export const styledTheme = {
  ...theme,
  palette: {
    ...theme.palette,
    extra: {
      indicators: {
        good: '#109839',
        bad: '#DE5C3B',
        moderate: '#F9C840',
      },
    },
  },
};

export default theme;
