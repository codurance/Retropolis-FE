import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import * as PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { deleteCardApi, sendUpVote } from '../../api/cardsApi';
import { getUsername } from '../../services/loginService';
import CardForm from '../CardForm/CardForm';
import CardItem from './CardItem';

const useStyles = makeStyles(() => ({
  root: {
    wordBreak: 'break-all',
    marginBottom: '10px'
  }
}));

const CardContainer = ({ cardProp, handleDeleteCard }) => {
  const classes = useStyles();
  const username = getUsername();
  const [voters, setVoters] = useState([]);
  const [edit, setEdit] = useState(false);

  function upVoteCard() {
    const currentVoters = [...voters];
    setVoters([...currentVoters, username]);

    sendUpVote(cardProp.id, username).catch(() => {
      setVoters(currentVoters);
    });
  }

  function haveVoted() {
    return voters.includes(username);
  }

  function deleteCardHandler() {
    deleteCardApi(cardProp.id).then(() => {
      handleDeleteCard(cardProp);
    }).catch(() => {
    });
  }

  function editCardHandler() {
    setEdit(true);
  }

  return (
    <Card className={classes.root}>
      {edit ? (
        <CardContent className={classes.body}>
          <CardForm
            handleCancelButton={setEdit}
            colId={cardProp.columnId}
            handleAddCard={() => {
              console.log('boom');
            }}
            defaultText={cardProp.text}
          />
        </CardContent>
      ) : (
        <CardItem
          deleteCardHandler={deleteCardHandler}
          editCardHandler={editCardHandler}
          haveVoted={haveVoted}
          voters={voters.length}
          upVoteCard={upVoteCard}
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
  handleDeleteCard: PropTypes.func.isRequired
};

export default CardContainer;
