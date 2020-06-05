import {
  it, jest, expect, beforeEach, afterEach
} from '@jest/globals';
import { handleResponse } from './fetchApi';
import * as loginService from '../services/loginService';

beforeEach(() => {
  jest.spyOn(loginService, 'failLogin');
});

afterEach(() => {
  jest.clearAllMocks();
});

it('returns the response when response is ok', () => {
  const mockResponse = {
    ok: true,
    json: () => 'response'
  };

  expect(handleResponse(mockResponse)).toBe('response');
});

it('throws response when status is 401', () => {
  const mockResponse = { status: 401 };

  try {
    handleResponse(mockResponse);
  } catch (error) {
    expect(error).toEqual(mockResponse);
  }

  expect(loginService.failLogin).toHaveBeenCalledTimes(1);
});


it('throws error if response is not ok or 401', () => {
  const mockResponse = {
    text: () => 'text'
  };

  expect(() => handleResponse(mockResponse)).toThrowError('text');
});
