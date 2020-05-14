import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { afterEach, it } from '@jest/globals';
import Column from './Column';

afterEach(cleanup);

it('should render the column', () => {
  const { getByText } = render(<Column />);
  getByText('Went well');
});

it('should render add card button', () => {
  const { getByText } = render(<Column />);
  getByText('Add card');
});

it('should render a form when add card button is clicked', () => {
  const { getByText } = render(<Column />);
  const cardButton = getByText('Add card');
  cardButton.click();
  getByText('Enter a title for this card...');
});
