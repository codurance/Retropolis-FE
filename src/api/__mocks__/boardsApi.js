const dummyData = require('../boardsApiMock.json');

async function getBoards() {
  return new Promise((resolve) => {
    resolve(dummyData);
  });
}

module.exports = { getBoards };
