import {
  afterEach, beforeEach, describe, expect, it, jest
} from '@jest/globals';

import * as fetchApi from './fetchApi';

import {
  deleteCardApi, editCard, saveCard, sendUpVote
} from './cardsApi';

let fetchApiSpy;
const cardUrl = '/cards';

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
      saveCard({ columnId: 1 }).catch((err) => {
        expect(err.message).toEqual('Invalid card request');
        done();
      });
    });

    it('throws an error when text is empty', (done) => {
      expect.assertions(1);
      saveCard({ text: '', columnId: 1 }).catch((err) => {
        expect(err.message).toEqual('Invalid card request');
        done();
      });
    });

    it('throws an error when text is only spaces', (done) => {
      expect.assertions(1);
      saveCard({ text: '  ', columnId: 1 }).catch((err) => {
        expect(err.message).toEqual('Invalid card request');
        done();
      });
    });

    it('throws an error when columnId doesn\'t exist', (done) => {
      expect.assertions(1);
      saveCard({ text: 'hello' }).catch((err) => {
        expect(err.message).toEqual('Invalid card request');
        done();
      });
    });

    it('throws an error when columnId null', (done) => {
      expect.assertions(1);
      saveCard({ text: 'hello', columnId: null }).catch((err) => {
        expect(err.message).toEqual('Invalid card request');
        done();
      });
    });
  });

  describe('successful request', () => {
    it('sends a saved card with an id', async () => {
      const card = {
        columnId: 1, text: 'text', username: 'John Doe', voters: []
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
      editCard(1, '').catch((err) => {
        expect(err.message).toEqual('Invalid card request');
        done();
      });
    });

    it('throws an error when text is only spaces', (done) => {
      expect.assertions(1);
      editCard(1, '   ').catch((err) => {
        expect(err.message).toEqual('Invalid card request');
        done();
      });
    });

    it('throws an error when text null', (done) => {
      expect.assertions(1);
      editCard(1, null).catch((err) => {
        expect(err.message).toEqual('Invalid card request');
        done();
      });
    });
  });

  describe('valid request', () => {
    it('calls fetchWrapper with updated text', async () => {
      fetchApiSpy = jest.spyOn(fetchApi, 'fetchWrapper').mockImplementationOnce(() => {});
      const newText = 'text';
      await editCard(1, newText);
      expect(fetchApiSpy).toHaveBeenCalledWith({
        endpoint: cardUrl + '/1',
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
      const cardId = 1;
      await deleteCardApi(cardId);
      expect(fetchApiSpy).toHaveBeenCalledWith({
        endpoint: cardUrl + '/' + cardId,
        method: 'DELETE'
      });
    });
  });
});

describe('upvote card', () => {
  describe('valid request', () => {
    it('sends upvoted card with updated voters array', async () => {
      fetchApiSpy = jest.spyOn(fetchApi, 'fetchWrapper').mockImplementationOnce(() => {});
      const id = 1;
      const username = 'John Doe';
      await sendUpVote(id, username);
      expect(fetchApiSpy).toHaveBeenCalledWith({
        endpoint: cardUrl + '/' + id + '/vote',
        method: 'PATCH',
        body: {
          username,
          addVote: true
        }
      });
    });
  });
});
