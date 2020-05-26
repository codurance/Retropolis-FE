import React from 'react';
import { afterEach, expect, it } from '@jest/globals';
import {
  act, cleanup, render, waitFor
} from '@testing-library/react';
import { toBeDisabled } from '@testing-library/jest-dom/matchers';
import CardItem from './CardItem';

afterEach(cleanup);

function renderCardItem(args) {
  const defaultProps = {
    cardProp: {
      id: 0,
      text: '',
      userName: '',
      votes: 0
    }
  };
  const props = { ...defaultProps, ...args };
  return render(<CardItem {...props} />);
}

it('shows the user name on the card', () => {
  const { getByText } = renderCardItem({ cardProp: { userName: 'John Doe' } });
  getByText('John Doe');
});

it('shows a number for the amount of votes', () => {
  const { getByText } = renderCardItem();
  getByText('0');
});

it('has an up-vote button', () => {
  const { getByRole } = renderCardItem();
  getByRole('button');
});

it('increments the counter when you click up-vote', async () => {
  await act(async () => {
    const { getByRole, getByText } = renderCardItem();
    getByRole('button').click();
    await waitFor(() => {
      getByText('1');
    });
  });
});

it('disables the button when you click up-vote', async () => {
  expect.extend({ toBeDisabled });
  await act(async () => {
    const { getByRole } = renderCardItem();
    getByRole('button').click();
    await waitFor(() => {
      expect(getByRole('button')).toBeDisabled();
    });
  });
});
