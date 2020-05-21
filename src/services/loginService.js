export function successLogin(googleResponse) {
  sessionStorage.setItem('username', googleResponse.profileObj.givenName);
  sessionStorage.setItem('userToken', googleResponse.tokenId);
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

export function getAuth() {
  return getToken() && getUsername();
}
