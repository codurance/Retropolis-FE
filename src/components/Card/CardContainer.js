import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import * as PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { deleteCardApi, editCard, sendUpVote } from '../../api/cardsApi';
import CardItem from './CardItem';
import EditCardForm from '../CardForm/EditCardForm';
import { getUsername } from '../../services/loginService';

const useStyles = makeStyles(() => ({
  root: {
    wordBreak: 'break-all',
    marginBottom: '10px'
  }
}));

const CardContainer = ({ cardProp, editCardToBoard, handleDeleteCard }) => {
  const classes = useStyles();
  const username = getUsername();
  const [edit, setEdit] = useState(false);
  const [editError, setEditError] = useState(false);

  function deleteCardHandler() {
    deleteCardApi(cardProp.id).then(() => {
      handleDeleteCard(cardProp);
    }).catch(() => {});
  }

  const editCardHandler = () => setEdit(true);

  const handleFormSubmit = (e, text) => {
    e.preventDefault();
    editCard(cardProp.id, text).then((updatedCard) => {
      setEditError(false);
      setEdit(false);
      editCardToBoard(updatedCard);
    }).catch(() => setEditError(true));
  };

  const handleUpvoteCard = () => {
    sendUpVote(cardProp.id, username).then(() => {});
  };

  return (
    <Card className={classes.root}>
      {edit ? (
        <EditCardForm
          handleFormSubmit={handleFormSubmit}
          editCardToBoard={editCardToBoard}
          handleCancelButton={setEdit}
          error={editError}
          cardId={cardProp.id}
          defaultText={cardProp.text}
        />
      ) : (
        <CardItem
          voteCardHandler={handleUpvoteCard}
          deleteCardHandler={deleteCardHandler}
          editCardHandler={editCardHandler}
          cardProp={cardProp}
        />
      )}
    </Card>
  );
};

const cardType = PropTypes.shape({
  text: PropTypes.string,
  id: PropTypes.number,
  username: PropTypes.string,
  columnId: PropTypes.number
});

CardContainer.propTypes = {
  cardProp: cardType.isRequired,
  handleDeleteCard: PropTypes.func.isRequired,
  editCardToBoard: PropTypes.func.isRequired
};

export default CardContainer;
