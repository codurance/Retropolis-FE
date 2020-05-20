import { handleResponse } from './helpers';

const fetch = require('node-fetch');

async function getBoards() {
  const response = await fetch(`${process.env.API_URL}/board`);
  return handleResponse(response);
}

module.exports = { getBoards };
