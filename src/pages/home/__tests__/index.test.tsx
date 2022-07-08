import React from 'react';
import { render } from '../../../utils/tests';
import Home from '..';

describe('Render Home page', () => {
  it('should test if Home page is rendered and showing the Text in screen', async () => {
    const { getByTestId } = render(<Home />);

    getByTestId('container');
  });
});
