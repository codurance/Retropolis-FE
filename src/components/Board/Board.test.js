import React from 'react';
import {jest, it, beforeAll} from '@jest/globals';
import { act, render, waitFor } from '@testing-library/react';
import Board from './Board';
import { getBoards, setFail } from '../../api/boardsApi';

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

it('should ', () => {
  setFail(true);
  getBoards().then().catch(console.log);
});
