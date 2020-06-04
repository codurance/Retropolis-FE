import {
  expect, it, describe, jest, beforeEach, afterEach
} from '@jest/globals';
import { saveBoard, getBoard, getBoards } from './boardsApi';
import * as fetchApi from './fetchApi';

let fetchApiSpy;
const endpoint = '/boards';
const invalidMessage = 'Invalid board request';

beforeEach(() => {
  fetchApiSpy = jest.spyOn(fetchApi, 'fetchWrapper').mockImplementationOnce(() => {});
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('saveBoard', () => {
  describe('invalid request', () => {
    it('throws an error when title doesn\'t exist', (done) => {
      expect.assertions(1);
      saveBoard({ }).catch((err) => {
        expect(err.message).toEqual(invalidMessage);
        done();
      });
    });

    it('throws an error when title is empty', (done) => {
      expect.assertions(1);
      saveBoard({ title: '' }).catch((err) => {
        expect(err.message).toEqual(invalidMessage);
        done();
      });
    });
  });


  describe('valid request', () => {
    it('calls fetchWrapper with updated text', async () => {
      fetchApiSpy = jest.spyOn(fetchApi, 'fetchWrapper').mockImplementationOnce(() => {});
      const body = { title: 'retro 1/1/01', userEmail: 'john.doe@codurance.com' };
      await saveBoard(body);
      expect(fetchApiSpy).toHaveBeenCalledWith({
        endpoint,
        method: 'POST',
        body
      });
    });
  });
});

describe('getBoard', () => {
  it('calls fetchWrapper with boardId', async () => {
    fetchApiSpy = jest.spyOn(fetchApi, 'fetchWrapper').mockImplementationOnce(() => {});
    const boardId = 1;
    await getBoard(boardId);
    expect(fetchApiSpy).toHaveBeenCalledWith({
      endpoint: endpoint + '/' + boardId
    });
  });
});

describe('getBoards', () => {
  it('calls fetchWrapper with /boards endpoint', async () => {
    fetchApiSpy = jest.spyOn(fetchApi, 'fetchWrapper').mockImplementationOnce(() => {});
    await getBoards();
    expect(fetchApiSpy).toHaveBeenCalledWith({
      endpoint
    });
  });
});
