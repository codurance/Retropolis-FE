import { expect, it } from '@jest/globals';
import { addNewCard } from './BoardService';

it('returns a new board with the new card added', () => {
  const board = {
    columns: [
      {
        id: 1,
        title: 'Start',
        cards: [
          {
            id: 1,
            columnId: 1,
            text: 'hello'
          }
        ]
      }
    ]
  };

  const newCard = {
    id: 2,
    columnId: 1,
    text: 'hello again'
  };
  const object = addNewCard(board, newCard);
  expect(object.columns[0].cards.length).toBe(2);
});

it('returns a new board with the new card added', () => {
  const board = {
    columns: [
      {
        id: 1,
        title: 'Start',
        cards: [
          {
            id: 1,
            columnId: 1,
            text: 'hello'
          }
        ]
      },
      {
        id: 2,
        title: 'Start',
        cards: [
          {
            id: 2,
            columnId: 2,
            text: 'hello there'
          }
        ]
      }
    ]
  };

  const newCard = {
    id: 3,
    columnId: 2,
    text: 'hello again'
  };
  const object = addNewCard(board, newCard);
  expect(object.columns[1].cards.length).toBe(2);
});
