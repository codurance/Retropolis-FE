import { jest, it } from '@jest/globals';
import { act, render, waitFor } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';
import { setFail, setMockResponse } from '../../api/__mocks__/mockHelper';

jest.mock('../../api/boardsApi');

function renderHome() {
  const props = {
    history: {
      push: () => {},
      location: {}
    }
  };
  return render(<MemoryRouter><Home {...props} /></MemoryRouter>);
}

it('displays fetching screen when fetching boards', async () => {
  await act(async () => {
    const { getByText } = renderHome();
    getByText('Fetching...');
  });
});

it('shows error when failed to get boards', async () => {
  await act(async () => {
    setFail(true);
    const { getByText } = renderHome();
    await waitFor(() => {
      getByText('Failed to get boards');
    });
  });
});

it('shows board name when it is fetched', async () => {
  await act(async () => {
    setFail(false);
    const boards = [{ id: 1, title: 'First Sprint' }];
    setMockResponse(boards);
    const { getByText } = renderHome();
    await waitFor(() => {
      getByText('First Sprint');
    });
  });
});

it('shows boards when they are fetched', async () => {
  await act(async () => {
    setFail(false);
    const boards = [{ id: 1, title: 'First Sprint' }, { id: 2, title: 'Second Sprint' }];
    setMockResponse(boards);
    const { getByText } = renderHome();
    await waitFor(() => {
      getByText('First Sprint');
      getByText('Second Sprint');
    });
  });
});
