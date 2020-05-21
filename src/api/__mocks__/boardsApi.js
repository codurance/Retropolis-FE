const { getFail } = require('./mockHelper');
const dummyData = require('./boardsApiMockResponse.json');

export const getBoards = async () => (getFail() ? Promise.reject(new Error('fail'))
  : new Promise((resolve) => resolve(dummyData)));
