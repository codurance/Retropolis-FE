import React from 'react';
import {
  afterEach, expect, it, jest
} from '@jest/globals';
import {
  act, cleanup, render, waitFor
} from '@testing-library/react';
import { toBeDisabled } from '@testing-library/jest-dom/matchers';
import * as service from '../../api/cardsApi';
import CardContainer from './CardContainer';

afterEach(cleanup);

function renderCardContainer(args) {
  const defaultProps = {
    cardProp: {
      id: 0,
      text: '',
      username: '',
      voters: []
    },
    editCardToBoard: () => {},
    handleDeleteCard: () => {}
  };
  const props = { ...defaultProps, ...args };
  return render(<CardContainer {...props} />);
}

it('removes card on click', async () => {
  jest.spyOn(service, 'deleteCardApi');

  await act(async () => {
    const { getByTestId, getByText } = renderCardContainer({
      cardProp: {
        username: 'John Doe',
        id: 0,
        text: '',
        voters: []
      }
    });
    getByText('John Doe');
    getByTestId('delete-card-button').click();
    await waitFor(() => {
      expect(service.deleteCardApi).toHaveBeenCalledTimes(1);
    });
  });
});

it('disables the button when you click up-vote', async () => {
  expect.extend({ toBeDisabled });
  let container;
  await act(async () => {
    container = renderCardContainer();
  });
  const { getByTestId } = container;
  getByTestId('upvote-card-button').click();
  await waitFor(() => {
    expect(getByTestId('upvote-card-button')).toBeDisabled();
  });
});

it('increments the counter when you click up-vote', async () => {
  let container;
  await act(async () => {
    container = renderCardContainer();
  });
  const { getByTestId, getByText } = container;
  getByTestId('upvote-card-button').click();
  await waitFor(() => {
    getByText('1');
  });
});

it('shows the user name on the card', () => {
  const { getByText } = renderCardContainer({
    cardProp: {
      username: 'John Doe',
      id: 0,
      text: '',
      voters: []
    }
  });
  getByText('John Doe');
});

it('shows a number for the amount of votes', () => {
  const { getByText } = renderCardContainer();
  getByText('0');
});

it('has an up-vote button', () => {
  const { getByTestId } = renderCardContainer();
  getByTestId('upvote-card-button');
});

it('has an delete button', () => {
  const { getByTestId } = renderCardContainer();
  getByTestId('delete-card-button');
});

it('has an edit button', () => {
  const { getByTestId } = renderCardContainer();
  getByTestId('edit-card-button');
});
