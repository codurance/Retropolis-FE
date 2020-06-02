import fetchWrapper from './fetchApi';

export const getBoard = () => fetchWrapper({ endpoint: '/boards/1' });

// export const getBoards = () => fetchWrapper({ endpoint: '/boards' });
export const getBoards = () => new Promise((resolve) => resolve([
  { id: 1, title: 'blah' },
  { id: 2, title: 'bla' }
]));
