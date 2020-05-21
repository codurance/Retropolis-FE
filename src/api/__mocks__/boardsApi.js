const { getFail } = require('./mockHelper');
const dummyData = require('./boardsApiMockResponse.json');

export default async function getBoards() {
  return getFail() ? Promise.reject(new Error('fail'))
    : new Promise((resolve) => resolve(dummyData));
}
