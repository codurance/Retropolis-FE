import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { afterEach, it } from '@jest/globals';
import Column from './Column';

afterEach(cleanup);

function renderColumn(args) {
  const defaultProps = {
    columnProp: {
      id: 1,
      title: 'Any title',
      cards: [
        {
          id: 1,
          columnId: 1,
          text: 'Any text'
        }
      ]
    },
    addNewCardToBoard: () => {
    }
  };

  const props = { ...defaultProps, ...args };
  return render(<Column {...props} />);
}

it('should render the column', () => {
  const { getByText } = renderColumn();
  getByText('Any title');
});

it('should render one card in column', () => {
  const { getByText } = renderColumn();
  getByText('Any text');
});

it('should render add card button', () => {
  const { getByText } = renderColumn();
  getByText('Add a card');
});

it('should render a form when add card button is clicked', () => {
  const { getByText, getAllByText } = renderColumn();
  const cardButton = getByText('Add a card');
  cardButton.click();
  getAllByText('Enter a title for this card...');
});
