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
import { getUsername } from '../../services/loginService';

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
  const username = getUsername();
  const [voters, setVoters] = useState([]);

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

  return (
    <Card className={classes.root}>
      <CardContent className={classes.body}>
        <Typography gutterBottom>
          { cardProp.text }
        </Typography>
      </CardContent>
      <CardActions className={classes.author}>
        { cardProp.username }
      </CardActions>
      <CardActions disableSpacing className={classes.upVote}>
        <span className={classes.upVoteCounter}>{ voters.length }</span>
        <IconButton
          disabled={haveVoted()}
          size="small"
          onClick={() => upVoteCard()}
        >
          {haveVoted()
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
  username: PropTypes.string
});

CardItem.propTypes = {
  cardProp: cardType.isRequired
};

export default CardItem;
