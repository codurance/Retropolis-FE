import React from 'react';
import { jest, it, beforeEach } from '@jest/globals';
import { act, render, waitFor } from '@testing-library/react';
import Board from './Board';
import { setFail } from '../../api/__mocks__/mockHelper';

jest.mock('../../api/boardsApi');

beforeEach(() => {
  setFail(false);
});

function renderBoard(args) {
  const defaultProps = {
    setAuth: () => {}
  };

  const props = { ...defaultProps, ...args };

  return render(<Board {...props} />);
}

it('shows three columns', async () => {
  await act(async () => {
    const { getByText } = renderBoard();
    await waitFor(() => {
      getByText('Start');
      getByText('Stop');
      getByText('Continue');
    });
  });
});

it('should return error message when response fails', async () => {
  setFail(true);
  await act(async () => {
    const { getByText } = renderBoard();
    await waitFor(() => {
      getByText('Sorry something went wrong...');
    });
  });
});
