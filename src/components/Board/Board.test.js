import React from 'react';
import { jest, it, beforeEach } from '@jest/globals';
import { act, render, waitFor } from '@testing-library/react';
import Board from './Board';
import { setFail, setMockResponse } from '../../api/__mocks__/mockHelper';

const dummyData = require('../../api/__mocks__/boardsApiMockResponse.json');

jest.mock('../../api/boardsApi');

beforeEach(() => {
  setFail(false);
  setMockResponse(dummyData);
});

function renderBoard(args) {
  const defaultProps = {
    history: {
      push: () => {},
      location: {}
    },
    match: {
      params: {}
    }
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
