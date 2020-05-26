import fetchWrapper from './fetchApi';

function invalid(card) {
  return (!card.text || !card.text.trim().length
        || card.columnId === null || card.columnId === undefined);
}

async function invalidError() {
  throw new Error('Invalid card request');
}

export const saveCard = (card) => {
  if (invalid(card)) return invalidError();

  return fetchWrapper({ endpoint: '/cards', method: 'POST', body: card });
};

export const sendUpVote = (id, username) => {
  if (!id || !username) return invalidError();

  const url = `/cards/${id}`;
  return fetchWrapper({ endpoint: url, method: 'PATCH', body: { username } });
};
