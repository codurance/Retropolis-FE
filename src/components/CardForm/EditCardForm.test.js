import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { afterEach, it } from '@jest/globals';
import EditCardForm from './EditCardForm';

afterEach(cleanup);

function renderEditCardForm(args) {
  const defaultProps = {
    error: false,
    defaultText: '',
    handleFormSubmit: () => {},
    handleCancelButton: () => {}
  };

  const props = { ...defaultProps, ...args };
  return render(<EditCardForm {...props} />);
}

it('renders text field', () => {
  const { getAllByText } = renderEditCardForm();
  getAllByText('Enter a title for this card...');
});
