import React from 'react';
import { jest, it } from '@jest/globals';
import {act, render, waitFor } from '@testing-library/react';
import Board from './Board';

jest.mock('../../api/boardsApi');

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
