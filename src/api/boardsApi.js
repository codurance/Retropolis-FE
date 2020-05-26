import fetchWrapper from './fetchApi';

export const getBoards = () => fetchWrapper({ endpoint: '/boards/1' });
