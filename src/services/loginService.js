export function successLogin(googleResponse, setAuth) {
  sessionStorage.setItem('username', googleResponse.profileObj.givenName);
  sessionStorage.setItem('userToken', googleResponse.tokenId);
  setAuth(true);
}

export function failLogin() {
  sessionStorage.removeItem('username');
  sessionStorage.removeItem('userToken');
}

export function getUsername() {
  return sessionStorage.getItem('username');
}

export function getToken() {
  return sessionStorage.getItem('userToken');
}

export function isAuthenticated() {
  return getUsername() && getToken();
}
