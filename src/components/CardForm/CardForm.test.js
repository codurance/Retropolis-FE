import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { afterEach, it } from '@jest/globals';
import CardForm from './CardForm';


afterEach(cleanup);

function renderForm(args) {
  const defaultProps = {
    cards: [],
    colId: 1,
    handleCancelButton: () => {
    },
    handleAddCard: () => {
    }
  };

  const props = { ...defaultProps, ...args };
  return render(<CardForm {...props} />);
}

it('renders text field', () => {
  const { getAllByText } = renderForm();
  getAllByText('Enter a title for this card...');
});
