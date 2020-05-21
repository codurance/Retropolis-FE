import { beforeEach, expect, it } from '@jest/globals';
import { addNewCard } from './boardService';


let board = {};
beforeEach(() => {
  board = {
    columns: [
      { id: 1, cards: [] },
      { id: 2, cards: [] }
    ]
  };
});

it('returns a new board with the new card added', () => {
  const newCard = {
    id: 2,
    columnId: 1,
    text: 'hello again'
  };
  const object = addNewCard(board, newCard);
  expect(object.columns[0].cards.length).toBe(1);
});

it('returns a new board with the new card added', () => {
  const newCard = {
    id: 3,
    columnId: 2,
    text: 'hello again'
  };
  const object = addNewCard(board, newCard);
  expect(object.columns[1].cards.length).toBe(1);
});
