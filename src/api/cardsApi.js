import { handleResponse } from './helpers';

const fetch = require('node-fetch');

async function saveCard(card) {
  const response = await fetch(`${process.env.API_URL}/cards`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(card)
  });
  return handleResponse(response);
}

module.exports = { saveCard };
