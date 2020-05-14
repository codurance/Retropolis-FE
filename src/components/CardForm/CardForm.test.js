import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { afterEach, it } from '@jest/globals';
import CardForm from './CardForm';


afterEach(cleanup);

it('renders text field', () => {
  const { getByText } = render(<CardForm handleCancelButton={() => {}} />);
  getByText('Enter a title for this card...');
});
