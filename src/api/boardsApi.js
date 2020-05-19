const fetch = require('node-fetch');

function handleResponse(response) {
  if (response.ok) return response.json();
  throw new Error(response.text());
}

async function getBoards() {
  const response = await fetch('http://localhost:3000/src/api/boardsApiMock.json');
  // const response = await fetch(`${process.env.API_URL}/boards`);
  return handleResponse(response);
}

module.exports = { getBoards };