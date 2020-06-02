import fetchWrapper from './fetchApi';

export const getBoard = () => fetchWrapper({ endpoint: '/boards/1' });

export const getBoards = () => fetchWrapper({ endpoint: '/boards' });
