import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import * as PropTypes from 'prop-types';
import Column from '../Column/Column';
import { getBoards } from '../../api/boardsApi';
import { addNewCard } from '../../services/BoardService';

const Board = ({ user }) => {
  const [board, setBoard] = useState({ columns: [] });
  const [error, setError] = useState(false);
  const addCard = (newCard) => {
    const newState = addNewCard(board, newCard);

    setBoard({ ...board, newState });
  };

  const fetchBoard = () => {
    getBoards().then((boardResponse) => {
      setBoard(boardResponse);
      setError(false);
    }).catch(() => {
      setError(true);
    });
  };

  useEffect(() => {
    fetchBoard();
    const refreshBoardInterval = setInterval(() => {
      fetchBoard();
    }, 2000);
    return () => clearInterval(refreshBoardInterval);
  }, []);

  const renderBoard = () => (error ? (
    <>
      <p>Sorry something went wrong...</p>
    </>
  ) : (
    <Grid container spacing={3}>
      {board.columns.map((column) => (
        <Grid item xs={12} sm={3} key={column.id}>
          <Column key={column.id} columnProp={column} addNewCardToBoard={addCard} user={user} />
        </Grid>
      ))}
    </Grid>
  ));

  return (
    <>
      { renderBoard() }
    </>
  );
};

const user = PropTypes.shape({
  username: PropTypes.string,
  token: PropTypes.string
});

Board.propTypes = {
  user: user.isRequired
};

export default Board;
