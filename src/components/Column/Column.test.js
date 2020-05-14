import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { afterEach, it } from '@jest/globals';
import Column from './Column';

afterEach(cleanup);

it('should render the column', () => {
  const { getByText } = render(<Column />);
  getByText('Went well');
});
