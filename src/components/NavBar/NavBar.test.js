import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { afterEach, it } from '@jest/globals';
import NavBar from './NavBar';

afterEach(cleanup);

it('should render the navbar', () => {
  const { getByText } = render(<NavBar />);
  getByText('Retropolis');
});
