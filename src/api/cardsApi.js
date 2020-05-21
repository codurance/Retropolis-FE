const fetch = require('node-fetch');

function handleResponse(response) {
  if (response.ok) return response.json();
  throw new Error(response.text());
}

function invalid(card) {
  return (!card.text || !card.text.trim().length || card.columnId === null || card.columnId === undefined);
}

async function saveCard(card) {
  if (invalid(card)) throw new Error('Invalid card request');

  const response = await fetch(`${process.env.API_URL}/cards`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(card)
  });
  return handleResponse(response);
}

module.exports = { saveCard };
