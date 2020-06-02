import { jest, it } from '@jest/globals';
import { act, render, waitFor } from '@testing-library/react';
import React from 'react';
import Home from './Home';
import { setFail } from '../../api/__mocks__/mockHelper';

jest.mock('../../api/boardsApi');

function renderHome() {
  return render(<Home />);
}

it('displays fetching screen when fetching boards', () => {
  const { getByText } = renderHome();
  getByText('Fetching...');
});

it('shows no boards when empty', async () => {
  const { getByText } = renderHome();
  await waitFor(() => {
    getByText('No boards to display');
  });
});

it('shows error when failed to get boards', async () => {
  setFail(true);
  const { getByText } = renderHome();
  await waitFor(() => {
    getByText('Failed to get boards');
  });
});
