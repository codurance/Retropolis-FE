import { jest, it } from '@jest/globals';
import { render, waitFor } from '@testing-library/react';
import React from 'react';
import Home from './Home';
import { setFail, setMockResponse } from '../../api/__mocks__/mockHelper';

jest.mock('../../api/boardsApi');

function renderHome() {
  return render(<Home />);
}

it('displays fetching screen when fetching boards', () => {
  const { getByText } = renderHome();
  getByText('Fetching...');
});

it('shows no boards when empty', async () => {
  setMockResponse([]);
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

it('shows board name when it is fetched', async () => {
  setFail(false);
  const boards = [{ id: 1, title: 'First Sprint' }];
  setMockResponse(boards);
  const { getByText } = renderHome();
  await waitFor(() => {
    getByText('First Sprint');
  });
});

it('shows boards when they are fetched', async () => {
  setFail(false);
  const boards = [{ id: 1, title: 'First Sprint' }, { id: 2, title: 'Second Sprint' }];
  setMockResponse(boards);
  const { getByText } = renderHome();
  await waitFor(() => {
    getByText('First Sprint');
    getByText('Second Sprint');
  });
});
