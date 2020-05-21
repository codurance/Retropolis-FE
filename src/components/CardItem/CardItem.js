import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import * as PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';

const useStyles = makeStyles(() => ({
  root: {
    wordBreak: 'break-all',
    marginBottom: '10px'
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
      <CardActions style={{ float: 'right' }}>
        { cardProp.userName }
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
