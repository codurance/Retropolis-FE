import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { afterEach, it } from '@jest/globals';
import { MemoryRouter } from 'react-router-dom';
import NavBar from './NavBar';

afterEach(cleanup);

it('should render the navbar', () => {
  const { getByText } = render(<MemoryRouter><NavBar /></MemoryRouter>);
  getByText('Retropolis');
});
