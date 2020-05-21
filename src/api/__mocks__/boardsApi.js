const { getFail } = require('./mockHelper');
const dummyData = require('./boardsApiMockResponse.json');

async function getBoards() {
  return getFail() ? Promise.reject(new Error('fail'))
    : new Promise((resolve) => resolve(dummyData));
}

module.exports = { getBoards };
