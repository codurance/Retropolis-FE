const fetch = require('node-fetch');

const baseUrl = 'http://retropolisbe-env.eba-xifiu248.eu-west-2.elasticbeanstalk.com/cards';

async function getCards() {
  const response = await fetch(baseUrl);
  return response.json();
}

async function saveCard(card) {
  const response = await fetch(baseUrl, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(card)
  });
  return response.json();
}

module.exports = { saveCard, getCards };
