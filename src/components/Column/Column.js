import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import * as PropTypes from 'prop-types';
import CardItem from '../CardItem/CardItem';
import CardForm from '../CardForm/CardForm';

const Column = ({ cards, addNewCardToBoard }) => {
  const [cardFormEdit, setCardFormEdit] = useState(false);

  const passNewCardToBoard = (newCard) => {
    addNewCardToBoard(newCard);
  };

  return (
    <Card style={{ backgroundColor: '#f6f5f5' }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Went well
        </Typography>

        {cards.map((card) => <CardItem key={card.id} card={card} />)}

        <div style={{ marginTop: '15px' }}>
          { cardFormEdit
            ? (
              <CardForm handleCancelButton={setCardFormEdit} handleAddCard={passNewCardToBoard} />
            )
            : (
              <Button
                onClick={() => setCardFormEdit(!cardFormEdit)}
                style={{ textTransform: 'capitalize' }}
                size="medium"
                startIcon={<AddIcon />}
              >
                Add a card
              </Button>
            )}
        </div>
      </CardContent>
    </Card>
  );
};


Column.propTypes = {
  cards: PropTypes.arrayOf(CardItem.propTypes.card).isRequired,
  addNewCardToBoard: PropTypes.func.isRequired
};

export default Column;
