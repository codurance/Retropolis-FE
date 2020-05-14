import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import * as PropTypes from 'prop-types';

const CardItem = ({ card }) => (
  <Card style={{ marginBottom: '10px' }}>
    <CardContent>
      <Typography gutterBottom>
        { card.body }
      </Typography>
    </CardContent>
  </Card>
);

const cardType = PropTypes.shape({
  body: PropTypes.string,
  id: PropTypes.number
});

CardItem.propTypes = {
  card: cardType.isRequired
};

export default CardItem;
