import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { afterEach, it } from '@jest/globals';
import AddCardForm from './AddCardForm';


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
  return render(<AddCardForm {...props} />);
}

it('renders text field', () => {
  const { getAllByText } = renderForm();
  getAllByText('Enter a title for this card...');
});
