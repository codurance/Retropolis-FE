const dummyData = require('../boardsApiMock.json');

let fail = false;

async function getBoards() {
  return fail ? Promise.reject(new Error('fail'))
    : new Promise((resolve) => {
      resolve(dummyData);
    });
}

function setFail(state) {
  fail = state;
}

module.exports = { getBoards, setFail };
