import { beforeEach, expect, it } from '@jest/globals';
import { addNewCard, deleteCard, updateCardText } from './boardService';


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

it('removes a card from the board', () => {
  const card = { id: 3, columnId: 1, text: 'hello again' };
  board.columns[0].cards.push(card);
  const object = deleteCard(board, card);
  expect(object.columns[0].cards.length).toBe(0);
});

it('updates card text from the board', () => {
  const card = { id: 3, columnId: 1, text: 'hello again' };
  const updatedCard = { id: 3, columnId: 1, text: 'updated text' };
  board.columns[0].cards.push(card);
  const object = updateCardText(board, updatedCard);
  expect(object.columns[0].cards[0].text).toEqual(updatedCard.text);
});
