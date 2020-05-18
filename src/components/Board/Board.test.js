import React from 'react';
import { cleanup, render, act } from '@testing-library/react';
import { afterEach, it, jest } from '@jest/globals';
import Board from './Board';
import * as cardsApi from '../../api/cardsApi';

afterEach(cleanup);

jest.mock('../../api/boardsApi.js');

jest.mock('../../api/cardsApi.js');

it('has three columns', async () => {
  const promise = new Promise((resolve, reject) => {
    resolve([{ id: 1, text: 'hello' }]);
    reject(console.log);
  });
  cardsApi
    .getCards
    .mockReturnValue(promise);
  await act(() => promise);
  const { getByText } = render(<Board />);
  getByText('hello');
});
//
//
// import * as app from "./app";
// import * as math from "./math";
//
// // Set all module functions to jest.fn
// jest.mock("./math.js");
//
// test("calls math.add", () => {
//   app.doAdd(1, 2);
//   expect(math.add).toHaveBeenCalledWith(1, 2);
// });
//
// test("calls math.subtract", () => {
//   app.doSubtract(1, 2);
//   expect(math.subtract).toHaveBeenCalledWith(1, 2);
// });
