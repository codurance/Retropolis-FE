import { jest, it } from '@jest/globals';

import { getBoards } from '../../api/boardsApi';

jest.mock('../../api/boardsApi');

it('shows three columns', () => {
  getBoards().then(console.log);
});