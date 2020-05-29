import React from 'react';
import {
  afterEach, expect, it, jest
} from '@jest/globals';
import {
  act, cleanup, render, waitFor
} from '@testing-library/react';
import { toBeDisabled } from '@testing-library/jest-dom/matchers';
import CardContainer from './CardContainer';
import * as service from '../../api/cardsApi';

afterEach(cleanup);

function renderCardContainer(args) {
  const defaultProps = {
    cardProp: {
      id: 0,
      text: '',
      username: '',
      voters: []
    },
    handleDeleteCard: () => {},
    editCardToBoard: () => {}
  };
  const props = { ...defaultProps, ...args };
  return render(<CardContainer {...props} />);
}

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

it('increments the counter when you click up-vote', async () => {
  await act(async () => {
    const { getByTestId, getByText } = renderCardContainer();
    getByTestId('upvote-card-button').click();
    await waitFor(() => {
      getByText('1');
    });
  });
});

it('disables the button when you click up-vote', async () => {
  expect.extend({ toBeDisabled });
  await act(async () => {
    const { getByTestId } = renderCardContainer();
    getByTestId('upvote-card-button').click();
    await waitFor(() => {
      expect(getByTestId('upvote-card-button')).toBeDisabled();
    });
  });
});

it('has an delete button', () => {
  const { getByTestId } = renderCardContainer();
  getByTestId('delete-card-button');
});

it('has an edit button', () => {
  const { getByTestId } = renderCardContainer();
  getByTestId('edit-card-button');
});

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
