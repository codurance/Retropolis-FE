import * as PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Column from '../Column/Column';
import { getBoard } from '../../api/boardsApi';
import { addNewCard, deleteCard, updateCardText } from '../../services/boardService';
import { redirectToLogin } from '../../services/loginService';

const Board = ({ history, match }) => {
  const [board, setBoard] = useState({ columns: [] });
  const [error, setError] = useState(false);
  const addCard = (newCard) => {
    const newState = addNewCard(board, newCard);
    setBoard({ ...board, newState });
  };

  const editCard = (updatedCard) => {
    const newState = updateCardText(board, updatedCard);
    setBoard({ ...board, newState });
  };

  const handleDeleteCard = (card) => {
    const newState = deleteCard(board, card);
    setBoard({ ...board, newState });
  };

  const fetchBoard = () => {
    getBoard(match.params.id).then((boardResponse) => {
      setBoard(boardResponse);
      setError(false);
    }).catch((err) => {
      if (err.status === 401) {
        redirectToLogin(history);
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
          <Column
            key={column.id}
            columnProp={column}
            addNewCardToBoard={addCard}
            editCardToBoard={editCard}
            deleteCardFromBoard={handleDeleteCard}
          />
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

const history = PropTypes.shape({
  push: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired
});

const match = PropTypes.shape({
  params: PropTypes.object.isRequired
});

Board.propTypes = {
  history: history.isRequired,
  match: match.isRequired
};

export default Board;
