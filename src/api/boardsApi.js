import fetchWrapper from './fetchApi';

// eslint-disable-next-line import/prefer-default-export
export const getBoards = () => fetchWrapper({ endpoint: '/board' });
