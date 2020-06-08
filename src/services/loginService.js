export function successLogin(googleResponse) {
  sessionStorage.setItem('username', googleResponse.profileObj.givenName);
  sessionStorage.setItem('userEmail', googleResponse.profileObj.email);
  sessionStorage.setItem('userToken', googleResponse.tokenId);
}

export function redirectAfterLogin(history) {
  let url;
  try {
    url = history.location.state.from.pathname;
  } catch {
    url = '/';
  }
  history.push(url);
}

export function redirectToLogin(history) {
  const redirect = {
    pathname: '/login',
    state: { from: { pathname: history.location.pathname } }
  };
  history.push(redirect);
}

export function failLogin() {
  sessionStorage.removeItem('username');
  sessionStorage.removeItem('userToken');
}

export function getUsername() {
  return sessionStorage.getItem('username');
}

export function getUserEmail() {
  return sessionStorage.getItem('userEmail');
}

export function getToken() {
  return sessionStorage.getItem('userToken');
}

export function getAuth() {
  return getToken() && getUsername();
}
