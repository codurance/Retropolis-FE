import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const CardItem = () => (
  <Card style={{ marginBottom: '10px' }}>
    <CardContent>
      <Typography gutterBottom>
        Word of the Day
      </Typography>
    </CardContent>
  </Card>
);

export default CardItem;
