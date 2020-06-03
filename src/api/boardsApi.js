import fetchWrapper from './fetchApi';

export const getBoard = (boardId) => fetchWrapper({ endpoint: '/boards/' + boardId });

export const getBoards = () => fetchWrapper({ endpoint: '/boards' });
