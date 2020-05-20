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
  const title = 'Any title';
  const { getByText } = renderColumn({ title });
  getByText(title);
});

it('should render one card in column', () => {
  const title = 'Any text';
  const { getByText } = renderColumn({ title });
  getByText(title);
});

it('should render add card button', () => {
  const title = 'Add a card';
  const { getByText } = renderColumn({ title });
  getByText(title);
});

it('should render a form when add card button is clicked', () => {
  const { getByText, getAllByText } = renderColumn();
  const cardButton = getByText('Add a card');
  cardButton.click();
  getAllByText('Enter a title for this card...');
});
