import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { afterEach, it } from '@jest/globals';
import Column from './Column';

afterEach(cleanup);

function renderColumn(args) {
  const defaultProps = {
    cards: [],
    addNewCardToBoard: () => {
    }
  };

  const props = { ...defaultProps, ...args };
  return render(<Column {...props} />);
}

it('should render the column', () => {
  const { getByText } = renderColumn();
  getByText('Went well');
});

it('should render add card button', () => {
  const { getByText } = renderColumn();
  getByText('Add card');
});

it('should render a form when add card button is clicked', () => {
  const { getByText } = renderColumn();
  const cardButton = getByText('Add card');
  cardButton.click();
  getByText('Enter a title for this card...');
});
