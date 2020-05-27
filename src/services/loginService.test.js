import { cleanup } from '@testing-library/react';
import {
  jest, it, afterEach, expect, beforeEach
} from '@jest/globals';
import {
  failLogin, getToken, getUsername, successLogin
} from './loginService';

beforeEach(() => {
  jest.clearAllMocks();
});

afterEach(cleanup);

it('should set username and token on the sessionStorage', () => {
  jest.spyOn(Object.getPrototypeOf(window.localStorage), 'setItem');
  const googleResponse = { profileObj: { givenName: 'John Doe' }, tokenId: 123 };

  successLogin(googleResponse);

  expect(sessionStorage.setItem).toHaveBeenCalledTimes(2);
  expect(sessionStorage.setItem).toHaveBeenCalledWith('username', googleResponse.profileObj.givenName);
  expect(sessionStorage.setItem).toHaveBeenLastCalledWith('userToken', googleResponse.tokenId);
});

it('should remove the username and the token from the sessionStorage', () => {
  jest.spyOn(Object.getPrototypeOf(window.localStorage), 'removeItem');

  failLogin();

  expect(sessionStorage.removeItem).toHaveBeenCalledTimes(2);
  expect(sessionStorage.removeItem).toHaveBeenCalledWith('username');
  expect(sessionStorage.removeItem).toHaveBeenLastCalledWith('userToken');
});

it('should retrieve the username from the sessionStorage', () => {
  jest.spyOn(Object.getPrototypeOf(window.localStorage), 'getItem');

  getUsername();

  expect(sessionStorage.getItem).toHaveBeenCalledTimes(1);
  expect(sessionStorage.getItem).toHaveBeenCalledWith('username');
});

it('should retrieve the token from the sessionStorage', () => {
  jest.spyOn(Object.getPrototypeOf(window.localStorage), 'getItem');

  getToken();

  expect(sessionStorage.getItem).toHaveBeenCalledTimes(1);
  expect(sessionStorage.getItem).toHaveBeenCalledWith('userToken');
});
