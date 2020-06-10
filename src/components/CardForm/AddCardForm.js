import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ClearIcon from '@material-ui/icons/Clear';
import IconButton from '@material-ui/core/IconButton';
import * as PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { saveCard } from '../../api/cardsApi';
import { getUserEmail } from '../../services/loginService';


const useStyles = makeStyles(() => ({
  textField: {
    backgroundColor: 'white'
  },
  submitButton: {
    textTransform: 'capitalize',
    marginRight: '10px'
  },
  iconButton: {
    textTransform: 'capitalize'
  }
}));

const AddCardForm = ({
  colId, handleCancelButton, handleAddCard
}) => {
  const classes = useStyles();
  const [text, setText] = useState('');
  const [error, setError] = useState(false);

  const handleAddCardButton = (e) => {
    e.preventDefault();
    saveCard({ columnId: colId, text, email: getUserEmail() }).then((newCard) => {
      setError(false);
      handleCancelButton();
      handleAddCard(newCard);
    }).catch(() => setError(true));
  };

  const handleChangeText = (e) => {
    setText(e.target.value);
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
            className={classes.textField}
            required
            error={error}
            label="Enter a title for this card..."
            fullWidth
            multiline
            autoFocus
            onKeyPress={(e) => onKeyPress(e)}
            variant="outlined"
            value={text}
            onChange={handleChangeText}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            className={classes.submitButton}
            size="small"
            type="submit"
            color="primary"
            variant="contained"
          >
            Save card
          </Button>
          <IconButton
            className={classes.iconButton}
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

AddCardForm.propTypes = {
  colId: PropTypes.number.isRequired,
  handleCancelButton: PropTypes.func.isRequired,
  handleAddCard: PropTypes.func.isRequired
};

export default AddCardForm;
