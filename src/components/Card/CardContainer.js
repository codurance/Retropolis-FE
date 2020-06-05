import React, { useEffect, useState } from 'react';
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
  const [voters, setVoters] = useState([]);

  const haveVoted = () => voters.includes(username);

  useEffect(() => {
    setVoters(cardProp.voters);
  }, [cardProp.voters]);

  function upVoteCard() {
    const currentVoters = [...voters];
    setVoters([...currentVoters, username]);
    sendUpVote(cardProp.id, username).catch(() => setVoters([...currentVoters]));
  }

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
          upVoteCard={upVoteCard}
          voters={voters}
          haveVoted={haveVoted}
        />
      )}
    </Card>
  );
};

const cardType = PropTypes.shape({
  text: PropTypes.string,
  id: PropTypes.number,
  username: PropTypes.string,
  columnId: PropTypes.number,
  voters: PropTypes.array
});

CardContainer.propTypes = {
  cardProp: cardType.isRequired,
  handleDeleteCard: PropTypes.func.isRequired,
  editCardToBoard: PropTypes.func.isRequired
};

export default CardContainer;
