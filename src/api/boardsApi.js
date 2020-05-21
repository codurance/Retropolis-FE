import fetchWrapper from './fetchApi';

export const getBoards = () => fetchWrapper({ endpoint: '/board' });
