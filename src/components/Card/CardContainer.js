import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import * as PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { deleteCardApi, sendUpVote } from '../../api/cardsApi';
import { getUsername } from '../../services/loginService';
import CardItem from './CardItem';
import EditCardForm from '../CardForm/EditCardForm';

const useStyles = makeStyles(() => ({
  root: {
    wordBreak: 'break-all',
    marginBottom: '10px'
  }
}));

const CardContainer = ({ cardProp, editCardToBoard, handleDeleteCard }) => {
  const classes = useStyles();
  const [edit, setEdit] = useState(false);

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
          <EditCardForm
            editCardToBoard={editCardToBoard}
            handleCancelButton={setEdit}
            cardId={cardProp.id}
            defaultText={cardProp.text}
          />
        </CardContent>
      ) : (
        <CardItem
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
