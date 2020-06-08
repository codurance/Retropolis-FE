import { cleanup } from '@testing-library/react';
import {
  jest, it, afterEach, expect, beforeEach, describe
} from '@jest/globals';
import {
  failLogin, getToken, getUsername, redirectAfterLogin, redirectToLogin, successLogin
} from './loginService';

beforeEach(() => {
  jest.clearAllMocks();
});

afterEach(cleanup);

it('should set username, email and token on the sessionStorage', () => {
  jest.spyOn(Object.getPrototypeOf(window.localStorage), 'setItem');
  const googleResponse = { profileObj: { givenName: 'John Doe', email: 'john.doe@codurance.com' }, tokenId: 123 };

  successLogin(googleResponse);

  expect(sessionStorage.setItem).toHaveBeenCalledTimes(3);
  expect(sessionStorage.setItem).toHaveBeenCalledWith('username', googleResponse.profileObj.givenName);
  expect(sessionStorage.setItem).toHaveBeenCalledWith('userEmail', googleResponse.profileObj.email);
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

describe('login redirects', () => {
  let historySpy;

  beforeEach(() => {
    historySpy = {
      push: () => {}
    };
    jest.spyOn(historySpy, 'push');
  });

  it('redirects to login with current path in state', () => {
    const currentPath = '/current_path';
    historySpy.location = { pathname: currentPath };

    redirectToLogin(historySpy);

    const expectedRedirect = {
      pathname: '/login',
      state: { from: { pathname: currentPath } }
    };
    expect(historySpy.push).toHaveBeenCalledTimes(1);
    expect(historySpy.push).toHaveBeenCalledWith(expectedRedirect);
  });

  it('redirects from login to given previous path', () => {
    const previousPath = '/previous_path';
    historySpy.location = {
      state: { from: { pathname: previousPath } }
    };

    redirectAfterLogin(historySpy);

    expect(historySpy.push).toHaveBeenCalledTimes(1);
    expect(historySpy.push).toHaveBeenCalledWith(previousPath);
  });

  it('redirects from login home if no given previous path', () => {
    redirectAfterLogin(historySpy);

    const home = '/';
    expect(historySpy.push).toHaveBeenCalledTimes(1);
    expect(historySpy.push).toHaveBeenCalledWith(home);
  });
});
