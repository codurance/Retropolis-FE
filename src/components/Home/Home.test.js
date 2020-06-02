import { jest, it } from '@jest/globals';
import { render, waitFor } from '@testing-library/react';
import React from 'react';
import Home from './Home';

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
  waitFor(() => {
    getByText('No boards to display');
  });
});
