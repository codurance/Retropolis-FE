import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Column from '../Column/Column';
import * as cardsApi from '../../api/cardsApi';

// import boardsApi
// replace .getCards() with .getBoard()
// replace useState [cards, setCards] => board, setBoard
// need 2 other Grid components
// cards={cards} => cards={board.columns.first.cards}
// loop columns object get column.cards

const Board = () => {
  const [cards, setCards] = useState([]);

  const addCard = (newCard) => {
    setCards([...cards, newCard]);
  };

  useEffect(() => {
    cardsApi.getCards().then((cardsResponse) => {
      setCards(cardsResponse);
    });
  }, []);

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Column cards={cards} addNewCardToBoard={addCard} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Board;
