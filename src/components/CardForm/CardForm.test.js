import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { afterEach, it } from '@jest/globals';
import CardForm from './CardForm';


afterEach(cleanup);

function renderForm(args) {
  const defaultProps = {
    cards: [],
    handleCancelButton: () => {
    },
    handleAddCard: () => {
    }
  };

  const props = { ...defaultProps, ...args };
  return render(<CardForm {...props} />);
}

it('renders text field', () => {
  const { getByText } = renderForm();
  getByText('Enter a title for this card...');
});
