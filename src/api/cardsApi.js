import fetchWrapper from './fetchApi';

// eslint-disable-next-line import/prefer-default-export
export const saveCard = (card) => fetchWrapper({ endpoint: '/cards', method: 'POST', body: card });
