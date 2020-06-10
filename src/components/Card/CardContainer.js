import React, { useEffect, useState } from 'react';
import Card from '@material-ui/core/Card';
import * as PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { deleteCardApi, editCard, sendUpVote } from '../../api/cardsApi';
import CardItem, { cardType } from './CardItem';
import EditCardForm from '../CardForm/EditCardForm';
import { getUserEmail } from '../../services/loginService';

const useStyles = makeStyles(() => ({
  root: {
    wordBreak: 'break-all',
    marginBottom: '10px'
  }
}));

const CardContainer = ({ cardProp, editCardToBoard, handleDeleteCard }) => {
  const classes = useStyles();
  const userEmail = getUserEmail();
  const [edit, setEdit] = useState(false);
  const [editError, setEditError] = useState(false);
  const [totalVoters, setVoters] = useState(cardProp.totalVoters);
  const [haveVoted, setHaveVoted] = useState(cardProp.haveVoted);

  useEffect(() => {
    setVoters(cardProp.totalVoters);
  }, [cardProp.totalVoters]);

  const addUpvote = () => {
    const currentVoters = totalVoters;
    setVoters(totalVoters + 1);
    setHaveVoted(true);
    sendUpVote(cardProp.id, userEmail, true).catch(() => {
      setVoters(currentVoters);
      setHaveVoted(false);
    });
  };

  const removeUpvote = () => {
    const currentVoters = totalVoters;
    setVoters(totalVoters - 1);
    setHaveVoted(false);
    sendUpVote(cardProp.id, userEmail, false).catch(() => {
      setVoters(currentVoters);
      setHaveVoted(true);
    });
  };

  const toggleUpvote = () => (haveVoted ? removeUpvote() : addUpvote());

  const deleteCardHandler = () => {
    deleteCardApi(cardProp.id).then(() => {
      handleDeleteCard(cardProp);
    }).catch(() => {
    });
  };

  const editCardHandler = () => setEdit(true);

  const handleFormSubmit = (e, text) => {
    e.preventDefault();
    editCard(cardProp.id, text).then((updatedCard) => {
      setEditError(false);
      setEdit(false);
      editCardToBoard(updatedCard);
    }).catch(() => setEditError(true));
  };

  return (
    <Card className={classes.root}>
      {edit ? (
        <EditCardForm
          handleFormSubmit={handleFormSubmit}
          handleCancelButton={setEdit}
          error={editError}
          defaultText={cardProp.text}
        />
      ) : (
        <CardItem
          deleteCardHandler={deleteCardHandler}
          editCardHandler={editCardHandler}
          cardProp={cardProp}
          toggleUpvote={toggleUpvote}
          totalVoters={totalVoters}
          haveVoted={haveVoted}
        />
      )}
    </Card>
  );
};

CardContainer.propTypes = {
  cardProp: cardType.isRequired,
  handleDeleteCard: PropTypes.func.isRequired,
  editCardToBoard: PropTypes.func.isRequired
};

export default CardContainer;
