import React from 'react';
import * as PropTypes from 'prop-types';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import EditIcon from '@material-ui/icons/Edit';
import CardActions from '@material-ui/core/CardActions';
import { ThumbUp, ThumbUpOutlined } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  author: {
    float: 'left',
    paddingLeft: 15,
    paddingTop: 15,
    opacity: 0.7,
    fontSize: 12,
    fontStyle: 'italic'
  },
  upVote: {
    float: 'right'
  },
  deleteButton: {
    float: 'right'
  },
  upVoteCounter: {
    paddingTop: 4,
    fontSize: 12
  },
  body: {
    paddingBottom: 0,
    opacity: 0.7,
    wordBreak: 'normal'
  }
}));

const CardItem = ({
  cardProp, deleteCardHandler, editCardHandler, toggleUpvote, totalVoters, haveVoted
}) => {
  const classes = useStyles();

  return (
    <>
      <CardContent className={classes.body}>
        <Typography gutterBottom>
          <IconButton
            data-testid="delete-card-button"
            onClick={() => deleteCardHandler()}
            className={classes.deleteButton}
            aria-label="settings"
            size="small"
          >
            <DeleteOutlinedIcon fontSize="small" />
          </IconButton>
          <IconButton
            data-testid="edit-card-button"
            onClick={() => editCardHandler()}
            className={classes.deleteButton}
            aria-label="settings"
            size="small"
          >
            <EditIcon fontSize="small" />
          </IconButton>
          {cardProp.text}
        </Typography>
      </CardContent>
      <CardActions className={classes.author}>
        {cardProp.author}
      </CardActions>
      <CardActions disableSpacing className={classes.upVote}>
        <span className={classes.upVoteCounter}>{totalVoters}</span>
        <IconButton
          data-testid="upvote-card-button"
          size="small"
          onClick={() => toggleUpvote()}
        >
          {haveVoted
            ? <ThumbUp fontSize="small" />
            : <ThumbUpOutlined fontSize="small" />}
        </IconButton>
      </CardActions>
    </>
  );
};

export const cardType = PropTypes.shape({
  text: PropTypes.string,
  id: PropTypes.number,
  username: PropTypes.string,
  columnId: PropTypes.number,
  totalVoters: PropTypes.number,
  haveVoted: PropTypes.bool
});

CardItem.propTypes = {
  cardProp: cardType.isRequired,
  deleteCardHandler: PropTypes.func.isRequired,
  editCardHandler: PropTypes.func.isRequired,
  toggleUpvote: PropTypes.func.isRequired,
  haveVoted: PropTypes.bool.isRequired,
  totalVoters: PropTypes.number.isRequired
};

export default CardItem;
