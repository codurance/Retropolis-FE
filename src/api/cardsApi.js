import fetchWrapper from './fetchApi';

function invalid(card) {
  return (!card.text || !card.text.trim().length
        || card.columnId === null || card.columnId === undefined);
}

export default function saveCard(card) {
  if (invalid(card)) {
    return new Promise(() => {
      throw new Error('Invalid card request');
    });
  }

  return fetchWrapper({ endpoint: '/cards', method: 'POST', body: card });
}
