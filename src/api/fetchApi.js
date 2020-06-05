import { failLogin, getToken } from '../services/loginService';

const fetch = require('node-fetch');

export const handleResponse = (response) => {
  if (response.ok) return response.json();
  if (response.status === 401) {
    failLogin();
    throw response;
  }
  throw new Error(response.text());
};

export const fetchWrapper = async ({
  endpoint,
  token = getToken(),
  method = 'GET',
  headers = { 'Content-Type': 'application/json', Authorization: token },
  body
} = {}) => {
  const payload = { method, headers };
  if (body) {
    payload.body = JSON.stringify(body);
  }
  const response = await fetch(process.env.API_URL + endpoint, payload);
  return handleResponse(response);
};
