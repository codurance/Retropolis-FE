const dummyData = require('../boardsApiMock.json');

let fail = false;

async function getBoards() {
  if (fail) {
    return Promise.reject(new Error('fail'));
  }
  return new Promise((resolve) => {
    resolve(dummyData);
  });
}

function setFail(state) {
  fail = state;
}

module.exports = { getBoards, setFail };
