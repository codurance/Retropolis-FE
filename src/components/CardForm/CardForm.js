import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ClearIcon from '@material-ui/icons/Clear';
import IconButton from '@material-ui/core/IconButton';
import * as PropTypes from 'prop-types';
import { saveCard } from '../../api/cardsApi';
import { getUsername } from '../../services/loginService';

const CardForm = ({ colId, handleCancelButton, handleAddCard }) => {
  const [newCardText, setNewCardText] = useState('');
  const [error, setError] = useState(false);


  const handleAddCardButton = (e) => {
    e.preventDefault();
    saveCard({ columnId: colId, text: newCardText, userName: getUsername() }).then((newCard) => {
      setError(false);
      handleCancelButton();
      handleAddCard(newCard);
    }).catch(() => setError(true));
  };

  const handleChangeText = (e) => {
    setNewCardText(e.target.value);
  };

  const onKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleAddCardButton(event);
    }
  };

  return (
    <form onSubmit={(e) => handleAddCardButton(e)}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            error={error}
            label="Enter a title for this card..."
            fullWidth
            multiline
            autoFocus
            onKeyPress={(e) => onKeyPress(e)}
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
  colId: PropTypes.number.isRequired,
  handleCancelButton: PropTypes.func.isRequired,
  handleAddCard: PropTypes.func.isRequired
};

export default CardForm;
