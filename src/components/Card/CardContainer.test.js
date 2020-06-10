import React from 'react';
import {
  afterEach, expect, it, jest, describe
} from '@jest/globals';
import {
  act, cleanup, render, waitFor
} from '@testing-library/react';
import * as service from '../../api/cardsApi';
import CardContainer from './CardContainer';

afterEach(cleanup);

function renderCardContainer(args) {
  const defaultProps = {
    cardProp: {
      id: 0,
      text: 'test',
      author: '',
      haveVoted: false,
      totalVoters: 0
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
        id: 0,
        text: '',
        author: 'John Doe',
        haveVoted: false,
        totalVoters: 0
      }
    });
    getByText('John Doe');
    getByTestId('delete-card-button').click();
    await waitFor(() => {
      expect(service.deleteCardApi).toHaveBeenCalledTimes(1);
    });
  });
});

it('shows the user name on the card', () => {
  const { getByText } = renderCardContainer({
    cardProp: {
      id: 0,
      text: '',
      author: 'John Doe',
      haveVoted: false,
      totalVoters: 0
    }
  });
  getByText('John Doe');
});

describe('upvoting', () => {
  it('increments the counter when you click up-vote', async () => {
    const { getByTestId, getByText } = renderCardContainer();
    getByTestId('upvote-card-button').click();
    await waitFor(() => {
      getByText('1');
    });
  });

  it('shows a number for the amount of votes', () => {
    const { getByText } = renderCardContainer();
    getByText('0');
  });

  it('has an up-vote button', () => {
    const { getByTestId } = renderCardContainer();
    getByTestId('upvote-card-button');
  });

  it('has a delete button', () => {
    const { getByTestId } = renderCardContainer();
    getByTestId('delete-card-button');
  });

  it('has an edit button', () => {
    const { getByTestId } = renderCardContainer();
    getByTestId('edit-card-button');
  });
});
