import { expect, it } from '@jest/globals';
import { saveCard } from './cardsApi';

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
