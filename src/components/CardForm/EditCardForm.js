import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ClearIcon from '@material-ui/icons/Clear';
import IconButton from '@material-ui/core/IconButton';
import * as PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';


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

const EditCardForm = ({
  handleCancelButton, defaultText, handleFormSubmit, error
}) => {
  const classes = useStyles();
  const [text, setText] = useState(defaultText);

  const handleChangeText = (e) => setText(e.target.value);
  const onKeyPress = (event) => { if (event.key === 'Enter') handleFormSubmit(event, text); };

  return (
    <CardContent>
      <form onSubmit={(e) => handleFormSubmit(e, text)}>
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
              data-testid="save-edit-button"
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
    </CardContent>
  );
};

EditCardForm.defaultProps = {
  defaultText: ''
};

EditCardForm.propTypes = {
  handleCancelButton: PropTypes.func.isRequired,
  handleFormSubmit: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired,
  defaultText: PropTypes.string
};

export default EditCardForm;
