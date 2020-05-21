import fetchWrapper from './fetchApi';

const saveCard = (card) => fetchWrapper({ endpoint: '/cards', method: 'POST', body: card });

module.exports = { saveCard };
