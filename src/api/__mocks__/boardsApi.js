const { getFail, getMockResponse } = require('./mockHelper');
const dummyData = require('./boardsApiMockResponse.json');

export const getBoard = async () => (getFail() ? Promise.reject(new Error('fail'))
  : new Promise((resolve) => resolve(dummyData)));

export const getBoards = async () => (getFail()
  ? Promise.reject(new Error('fail'))
  : new Promise((resolve) => resolve(getMockResponse())));

export const saveBoard = async () => (new Promise((resolve) => resolve(getMockResponse())));
