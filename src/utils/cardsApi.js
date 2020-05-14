const fetch = require('node-fetch');

const baseUrl = 'http://localhost:5000/cards';

function handleResponse(response) {
  if (response.ok) return response.json();
  throw new Error(response.text());
}

async function getCards() {
  const response = await fetch(baseUrl);
  return handleResponse(response);
}

async function saveCard(card) {
  const response = await fetch(baseUrl, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(card)
  });
  return handleResponse(response);
}

module.exports = { saveCard, getCards };
