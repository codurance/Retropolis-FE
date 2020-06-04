import React from 'react';
import {
  afterEach, expect, it, jest
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
