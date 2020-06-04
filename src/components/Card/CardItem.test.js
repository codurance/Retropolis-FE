import { expect, it } from '@jest/globals';
import { render, waitFor } from '@testing-library/react';
import React from 'react';
import { toBeDisabled } from '@testing-library/jest-dom/matchers';
import CardItem from './CardItem';

function renderCardItem(args) {
  const defaultProps = {
    cardProp: {
      id: 0,
      text: '',
      username: '',
      voters: []
    },
    deleteCardHandler: () => {},
    editCardHandler: () => {},
    voteCardHandler: () => {}
  };
  const props = { ...defaultProps, ...args };
  return render(<CardItem {...props} />);
}

it('increments the counter when you click up-vote', async () => {
  const { getByTestId, getByText } = renderCardItem();
  getByTestId('upvote-card-button').click();
  await waitFor(() => {
    getByText('1');
  });
});

it('disables the button when you click up-vote', async () => {
  expect.extend({ toBeDisabled });
  const { getByTestId } = renderCardItem();
  getByTestId('upvote-card-button').click();
  await waitFor(() => {
    expect(getByTestId('upvote-card-button')).toBeDisabled();
  });
});

it('shows a number for the amount of votes', () => {
  const { getByText } = renderCardItem();
  getByText('0');
});

it('has an up-vote button', () => {
  const { getByTestId } = renderCardItem();
  getByTestId('upvote-card-button');
});

it('has a delete button', () => {
  const { getByTestId } = renderCardItem();
  getByTestId('delete-card-button');
});

it('has an edit button', () => {
  const { getByTestId } = renderCardItem();
  getByTestId('edit-card-button');
});
