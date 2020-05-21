import fetchWrapper from './fetchApi';

const getBoards = () => fetchWrapper({ endpoint: '/board' });

module.exports = { getBoards };
