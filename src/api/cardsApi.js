const fetch = require('node-fetch');

function handleResponse(response) {
  if (response.ok) return response.json();
  throw new Error(response.text());
}

async function getCards() {
  const response = await fetch(`${process.env.API_URL}/cards`);
  return handleResponse(response);
}

async function saveCard(card) {
  const response = await fetch(`${process.env.API_URL}/cards`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(card)
  });
  return handleResponse(response);
}

module.exports = { saveCard };
