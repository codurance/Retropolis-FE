import {
  afterEach, beforeEach, describe, expect, it, jest
} from '@jest/globals';
import * as fetchApi from './fetchApi';
import {
  deleteCardApi, editCard, saveCard, sendUpVote
} from './cardsApi';

let fetchApiSpy;
const cardUrl = '/cards';
const invalidMessage = 'Invalid card request';
const cardId = 1;
const columnId = 1;

beforeEach(() => {
  fetchApiSpy = jest.spyOn(fetchApi, 'fetchWrapper').mockImplementationOnce(() => {});
});
afterEach(() => {
  jest.clearAllMocks();
});
describe('saveCard', () => {
  describe('invalid request', () => {
    it('throws an error when text doesn\'t exist', (done) => {
      expect.assertions(1);
      saveCard({ columnId }).catch((err) => {
        expect(err.message).toEqual(invalidMessage);
        done();
      });
    });

    it('throws an error when text is empty', (done) => {
      expect.assertions(1);
      saveCard({ text: '', columnId }).catch((err) => {
        expect(err.message).toEqual(invalidMessage);
        done();
      });
    });

    it('throws an error when text is only spaces', (done) => {
      expect.assertions(1);
      saveCard({ text: '  ', columnId }).catch((err) => {
        expect(err.message).toEqual(invalidMessage);
        done();
      });
    });

    it('throws an error when columnId doesn\'t exist', (done) => {
      expect.assertions(1);
      saveCard({ text: 'hello' }).catch((err) => {
        expect(err.message).toEqual(invalidMessage);
        done();
      });
    });

    it('throws an error when columnId null', (done) => {
      expect.assertions(1);
      saveCard({ text: 'hello', columnId: null }).catch((err) => {
        expect(err.message).toEqual(invalidMessage);
        done();
      });
    });
  });

  describe('successful request', () => {
    it('sends a saved card with an id', async () => {
      const card = {
        columnId, text: 'text', username: 'John Doe', voters: []
      };
      await saveCard(card);
      expect(fetchApiSpy).toHaveBeenCalledWith({
        endpoint: cardUrl,
        method: 'POST',
        body: card
      });
    });
  });
});

describe('editCard', () => {
  describe('invalid request', () => {
    it('throws an error when text is empty', (done) => {
      expect.assertions(1);
      editCard(cardId, '').catch((err) => {
        expect(err.message).toEqual(invalidMessage);
        done();
      });
    });

    it('throws an error when text is only spaces', (done) => {
      expect.assertions(1);
      editCard(cardId, '   ').catch((err) => {
        expect(err.message).toEqual(invalidMessage);
        done();
      });
    });

    it('throws an error when text null', (done) => {
      expect.assertions(1);
      editCard(cardId, null).catch((err) => {
        expect(err.message).toEqual(invalidMessage);
        done();
      });
    });
  });

  describe('valid request', () => {
    it('calls fetchWrapper with updated text', async () => {
      fetchApiSpy = jest.spyOn(fetchApi, 'fetchWrapper').mockImplementationOnce(() => {});
      const newText = 'text';
      await editCard(cardId, newText);
      expect(fetchApiSpy).toHaveBeenCalledWith({
        endpoint: cardUrl + '/' + cardId,
        method: 'PATCH',
        body: { newText }
      });
    });
  });
});

describe('deleteCardApi', () => {
  describe('valid request', () => {
    it('calls fetchWrapper with id in url for card deletion', async () => {
      fetchApiSpy = jest.spyOn(fetchApi, 'fetchWrapper').mockImplementationOnce(() => {});
      await deleteCardApi(cardId);
      expect(fetchApiSpy).toHaveBeenCalledWith({
        endpoint: cardUrl + '/' + cardId,
        method: 'DELETE'
      });
    });
  });
});

describe('up vote card', () => {
  describe('invalid request', () => {
    it('throws error when id is null', async (done) => {
      fetchApiSpy = jest.spyOn(fetchApi, 'fetchWrapper').mockImplementationOnce(() => {});
      const email = 'john.doe@codurance.com';
      const addVote = true;
      sendUpVote(null, email, addVote).catch((err) => {
        expect(err.message).toEqual('Invalid card request');
        done();
      });
    });
  });

  describe('valid request', () => {
    it('sends up voted card with updated voters array', async () => {
      fetchApiSpy = jest.spyOn(fetchApi, 'fetchWrapper').mockImplementationOnce(() => {});
      const email = 'john.doe@codurance.com';
      const addVote = true;
      await sendUpVote(cardId, email, addVote);
      expect(fetchApiSpy).toHaveBeenCalledWith({
        endpoint: cardUrl + '/' + cardId + '/vote',
        method: 'PATCH',
        body: {
          email,
          addVote
        }
      });
    });
  });
});
