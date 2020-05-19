import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Column from '../Column/Column';
import { getBoards } from '../../api/boardsApi';

// import boardsApi
// replace .getCards() with .getBoard()
// replace useState [cards, setCards] => board, setBoard
// need 2 other Grid components
// cards={cards} => cards={board.columns.first.cards}
// loop columns object get column.cards

const Board = () => {
  const [board, setBoard] = useState({ columns: [] });

  const addCard = (newCard) => {
    setBoard({ ...board, newCard });
  };

  useEffect(() => {
    getBoards().then((boardResponse) => {
      setBoard(boardResponse);
    });
  }, []);

  return (
    <div>
      <Grid container spacing={3}>

        {board.columns.map((column) => (
          <Grid item xs={3} key={column.id}>
            <Column key={column.id} columnProp={column} addNewCardToBoard={addCard} />
          </Grid>
        ))}

      </Grid>
    </div>
  );
};

export default Board;
