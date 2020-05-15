import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ClearIcon from '@material-ui/icons/Clear';
import IconButton from '@material-ui/core/IconButton';
import * as PropTypes from 'prop-types';
import { saveCard } from '../../api/cardsApi';

const CardForm = ({ handleCancelButton, handleAddCard }) => {
  const [newCardText, setNewCardText] = useState('');

  const handleAddCardButton = () => {
    handleCancelButton();
    saveCard({ text: newCardText }).then((newCard) => {
      handleAddCard(newCard);
    });
  };

  const handleChangeText = (e) => {
    setNewCardText(e.target.value);
  };

  return (
    <form onSubmit={() => handleAddCardButton()}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            label="Enter a title for this card..."
            fullWidth
            autoFocus
            style={{ backgroundColor: 'white' }}
            variant="outlined"
            value={newCardText}
            onChange={handleChangeText}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            style={{ textTransform: 'capitalize', marginRight: '10px' }}
            size="small"
            type="submit"
            color="primary"
            variant="contained"
          >
            Save card
          </Button>
          <IconButton
            style={{ textTransform: 'capitalize' }}
            size="small"
            onClick={() => handleCancelButton()}
          >
            <ClearIcon fontSize="small" />
          </IconButton>
        </Grid>
      </Grid>
    </form>
  );
};

CardForm.propTypes = {
  handleCancelButton: PropTypes.func.isRequired,
  handleAddCard: PropTypes.func.isRequired
};

export default CardForm;
