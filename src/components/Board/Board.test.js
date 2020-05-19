import React from 'react';
import { jest, it, beforeAll } from '@jest/globals';
import { act, render, waitFor } from '@testing-library/react';
import Board from './Board';
import { setFail } from '../../api/boardsApi';

jest.mock('../../api/boardsApi');

beforeAll(() => {
  setFail(false);
});

it('shows three columns', async () => {
  await act(async () => {
    const { getByText } = render(<Board />);
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
    const { getByText } = render(<Board />);
    await waitFor(() => {
      getByText('Sorry something went wrong...');
    });
  });
});
