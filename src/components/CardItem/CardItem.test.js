import React from 'react';
import {
  afterEach, expect, it, jest
} from '@jest/globals';
import {
  act, cleanup, render, waitFor
} from '@testing-library/react';
import { toBeDisabled } from '@testing-library/jest-dom/matchers';
import CardItem from './CardItem';
import * as service from '../../api/cardsApi';

afterEach(cleanup);

function renderCardItem(args) {
  const defaultProps = {
    cardProp: {
      id: 0,
      text: '',
      username: ''
    },
    handleDeleteCard: () => {}
  };
  const props = { ...defaultProps, ...args };
  return render(<CardItem {...props} />);
}

it('shows the user name on the card', () => {
  const { getByText } = renderCardItem({ cardProp: { username: 'John Doe' } });
  getByText('John Doe');
});

it('shows a number for the amount of votes', () => {
  const { getByText } = renderCardItem();
  getByText('0');
});

it('has an up-vote button', () => {
  const { getByTestId } = renderCardItem();
  getByTestId('upvote-card-button');
});

it('increments the counter when you click up-vote', async () => {
  await act(async () => {
    const { getByTestId, getByText } = renderCardItem();
    getByTestId('upvote-card-button').click();
    await waitFor(() => {
      getByText('1');
    });
  });
});

it('disables the button when you click up-vote', async () => {
  expect.extend({ toBeDisabled });
  await act(async () => {
    const { getByTestId } = renderCardItem();
    getByTestId('upvote-card-button').click();
    await waitFor(() => {
      expect(getByTestId('upvote-card-button')).toBeDisabled();
    });
  });
});

it('has an delete button', () => {
  const { getByTestId } = renderCardItem();
  getByTestId('delete-card-button');
});

it('removes card on click', async () => {
  jest.spyOn(service, 'deleteCardApi');

  await act(async () => {
    const { getByTestId, getByText } = renderCardItem({ cardProp: { username: 'John Doe' } });
    getByText('John Doe');
    getByTestId('delete-card-button').click();
    await waitFor(() => {
      expect(service.deleteCardApi).toHaveBeenCalledTimes(1);
    });
  });
});
