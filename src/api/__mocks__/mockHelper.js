let fail = false;
let response = [];

export function setFail(state) {
  fail = state;
}

export function getFail() {
  return fail;
}

export function setMockResponse(data) {
  response = data;
}

export function getMockResponse() {
  return response;
}

export function mockResponse() {
  return getFail()
    ? Promise.reject(new Error('fail'))
    : new Promise((resolve) => resolve(getMockResponse()));
}
