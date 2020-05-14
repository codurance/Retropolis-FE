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

CardItem.propTypes = {
  // FIXME Find a way to resolve this thing
  // eslint-disable-next-line react/forbid-prop-types
  card: PropTypes.object.isRequired
};

export default CardItem;
