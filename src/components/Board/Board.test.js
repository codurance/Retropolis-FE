import React from 'react';
import { jest, it } from '@jest/globals';
import { act, render } from '@testing-library/react';
import Board from './Board';

jest.mock('../../api/boardsApi');

it('shows three columns', async () => {
  await act(async () => {
    const { getByText, findByText } = render(<Board />);
    await findByText(() => {
      getByText('Start');
    });
  });
});
