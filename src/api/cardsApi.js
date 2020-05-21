import fetchWrapper from './fetchApi';

function invalid(card) {
  return (!card.text || !card.text.trim().length
        || card.columnId === null || card.columnId === undefined);
}

// eslint-disable-next-line import/prefer-default-export
export const saveCard = async (card) => {
  if (invalid(card)) throw new Error('Invalid card request');

  return fetchWrapper({ endpoint: '/cards', method: 'POST', body: card });
};
