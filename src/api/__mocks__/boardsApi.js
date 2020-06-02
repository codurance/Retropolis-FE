const { getFail } = require('./mockHelper');
const dummyData = require('./boardsApiMockResponse.json');

export const getBoard = async () => (getFail() ? Promise.reject(new Error('fail'))
  : new Promise((resolve) => resolve(dummyData)));

export const getBoards = async () => new Promise((resolve) => resolve(JSON.stringify([])));
