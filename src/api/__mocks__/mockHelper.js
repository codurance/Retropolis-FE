let fail = false;
let response = [];

function getFail() {
  return fail;
}

function getMockResponse() {
  return response;
}

export function setFail(state) {
  fail = state;
}

export function setMockResponse(data) {
  response = data;
}

export function mockResponse() {
  return getFail()
    ? Promise.reject(new Error('fail'))
    : new Promise((resolve) => resolve(getMockResponse()));
}
