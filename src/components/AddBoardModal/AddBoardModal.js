import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import * as PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { getUserEmail } from '../../services/loginService';
import { saveBoard } from '../../api/boardsApi';


const useStyles = makeStyles(() => ({
  button: {
    float: 'right',
    marginBottom: '10px'
  },
  addBoardCard: {
    backgroundColor: '#1976d2',
    color: 'white',
    textAlign: 'center',
    minHeight: '60px'
  }
}));

const AddBoardModal = ({ history }) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [text, setText] = useState('');
  const [error, setError] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangeText = (e) => {
    setText(e.target.value);
  };


  const handleAddBoardButton = (e) => {
    e.preventDefault();
    saveBoard({ title: text, userEmail: getUserEmail() }).then((newBoard) => {
      setError(false);
      handleClose();
      history.push(`/${newBoard.id}`);
    }).catch(() => setError(true));
  };

  return (
    <>
      <Button className={classes.button} data-testid="add-board-button" variant="contained" color="secondary" onClick={handleClickOpen} aria-label="Add">
        Create New Board
      </Button>
      <Dialog fullWidth maxWidth="sm" open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <form onSubmit={(e) => handleAddBoardButton(e)}>
          <DialogTitle id="form-dialog-title">Create Board</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              required
              error={error}
              label="Board Name"
              type="text"
              fullWidth
              value={text}
              onChange={handleChangeText}
            />
          </DialogContent>
          <DialogActions>
            <Button data-testid="cancel-modal-button" onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button
              type="submit"
              color="primary"
              data-testid="add-modal-button"
            >
              Add
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};

const history = PropTypes.shape({
  push: PropTypes.func.isRequired
});

AddBoardModal.propTypes = {
  history: history.isRequired
};

export default AddBoardModal;
