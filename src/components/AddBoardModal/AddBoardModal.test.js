import React from 'react';
import {
  cleanup, render, waitFor
} from '@testing-library/react';
import { afterEach, it, jest } from '@jest/globals';
import { waitForElementToBeRemoved } from '@testing-library/dom';
import AddBoardModal from './AddBoardModal';
import { setMockResponse } from '../../api/__mocks__/mockHelper';

jest.mock('../../api/boardsApi');

afterEach(cleanup);

function renderForm() {
  const props = {
    history: {
      push: () => {}
    }
  };

  return render(<AddBoardModal {...props} />);
}

it('renders text field', async () => {
  const { getByTestId, getByText } = renderForm();
  getByTestId('add-board-button').click();
  await waitFor(() => {
    getByText('Create Board');
  });
});

it('cancel button closes modal', async () => {
  const { getByTestId, queryByText } = renderForm();
  getByTestId('add-board-button').click();
  await waitFor(async () => {
    getByTestId('cancel-modal-button').click();
    await waitForElementToBeRemoved(() => queryByText('Create Board'));
  });
});

it('closes modal when it adds the board', async () => {
  const board = { id: 1, title: 'First Sprint' };
  setMockResponse(board);
  const { getByTestId, queryByText } = renderForm();
  getByTestId('add-board-button').click();
  await waitFor(async () => {
    getByTestId('add-modal-button').click();
    await waitForElementToBeRemoved(() => queryByText('Create Board'));
  });
});
