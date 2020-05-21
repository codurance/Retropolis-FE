import fetchWrapper from './fetchApi';

export default function getBoards() {
  return fetchWrapper({ endpoint: '/board' });
}
