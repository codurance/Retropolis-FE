export function successLogin(googleResponse) {
  sessionStorage.setItem('username', googleResponse.profileObj.givenName);
  sessionStorage.setItem('userToken', googleResponse.tokenId);
}

export function failLogin(googleResponse) {
  sessionStorage.removeItem('username');
  sessionStorage.removeItem('userToken');
  console.log(googleResponse);
}

export function getUsername() {
  return sessionStorage.getItem('username');
}

export function getToken() {
  return sessionStorage.getItem('userToken');
}
