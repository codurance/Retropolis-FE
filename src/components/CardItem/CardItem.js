import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import * as PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import { ThumbUp, ThumbUpOutlined } from '@material-ui/icons';
import { sendUpVote } from '../../api/cardsApi';

const useStyles = makeStyles(() => ({
  root: {
    wordBreak: 'break-all',
    marginBottom: '10px'
  },
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
  upVoteCounter: {
    paddingTop: 4,
    fontSize: 12
  },
  body: {
    paddingBottom: 0,
    opacity: 0.7
  }
}));

const CardItem = ({ cardProp }) => {
  const classes = useStyles();
  const [voted, setVoted] = useState(false);
  const [votes, setVotes] = useState(0);

  function upVoteCard() {
    const voteInc = votes + 1;
    setVoted(true);
    setVotes(voteInc);

    sendUpVote(cardProp.id).catch(() => {
      setVoted(false);
      setVotes(voteInc - 1);
    });
  }

  return (
    <Card className={classes.root}>
      <CardContent className={classes.body}>
        <Typography gutterBottom>
          { cardProp.text }
        </Typography>
      </CardContent>
      <CardActions className={classes.author}>
        { cardProp.userName }
      </CardActions>
      <CardActions disableSpacing className={classes.upVote}>
        <span className={classes.upVoteCounter}>{ votes }</span>
        <IconButton
          disabled={voted}
          size="small"
          onClick={() => upVoteCard()}
        >
          {voted
            ? <ThumbUp fontSize="small" />
            : <ThumbUpOutlined fontSize="small" />}
        </IconButton>
      </CardActions>
    </Card>
  );
};

const cardType = PropTypes.shape({
  text: PropTypes.string,
  id: PropTypes.number,
  userName: PropTypes.string
});

CardItem.propTypes = {
  cardProp: cardType.isRequired
};

export default CardItem;
