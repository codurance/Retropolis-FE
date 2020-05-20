function handleResponse(response) {
  if (response.ok) return response.json();
  throw new Error(response.text());
}

module.exports = { handleResponse };
