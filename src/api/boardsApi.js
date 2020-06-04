import { fetchWrapper } from './fetchApi';

function invalid(board) {
  return (!board.title || !board.title.trim().length);
}

async function invalidError() {
  throw new Error('Invalid board request');
}

const endpoint = '/boards';
export const saveBoard = (board) => {
  if (invalid(board)) return invalidError();

  return fetchWrapper({ endpoint, method: 'POST', body: board });
};

export const getBoard = (boardId) => fetchWrapper({ endpoint: endpoint + '/' + boardId });

export const getBoards = () => fetchWrapper({ endpoint });
