import fetchWrapper from './fetchApi';

function invalid(board) {
  return (!board.title || !board.title.trim().length);
}

async function invalidError() {
  throw new Error('Invalid card request');
}

export const saveBoard = (board) => {
  if (invalid(board)) return invalidError();

  return fetchWrapper({ endpoint: '/boards', method: 'POST', body: board });
};

export const getBoard = (boardId) => fetchWrapper({ endpoint: '/boards/' + boardId });

export const getBoards = () => fetchWrapper({ endpoint: '/boards' });
