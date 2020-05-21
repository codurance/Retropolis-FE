import * as PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Column from '../Column/Column';
import { getBoards } from '../../api/boardsApi';
import { addNewCard } from '../../services/boardService';

const Board = ({ setAuth }) => {
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
    }).catch((err) => {
      if (err.status === 401) {
        setAuth(false);
      } else {
        setError(true);
      }
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
          <Column key={column.id} columnProp={column} addNewCardToBoard={addCard} />
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

Board.propTypes = {
  setAuth: PropTypes.func.isRequired
};

export default Board;
