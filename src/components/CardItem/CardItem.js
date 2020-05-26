import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import * as PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import { ThumbUpOutlined } from '@material-ui/icons';

const useStyles = makeStyles(() => ({
  root: {
    wordBreak: 'break-all',
    marginBottom: '10px'
  },
  author: {
    float: 'left',
    paddingLeft: 15,
    opacity: 0.7
  }
}));

const CardItem = ({ cardProp }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography gutterBottom>
          { cardProp.text }
        </Typography>
      </CardContent>
      <CardActions className={classes.author}>
        { cardProp.userName }
      </CardActions>
      <CardActions style={{ float: 'right' }}>
        <IconButton
          style={{ textTransform: 'capitalize' }}
          size="small"
          onClick={() => alert('hello')}
        >
          { cardProp.votes }
          <ThumbUpOutlined fontSize="small" />
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
