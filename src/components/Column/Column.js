import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import CardItem from '../CardItem/CardItem';

const Column = () => (
  <Card style={{ backgroundColor: '#f6f5f5' }}>
    <CardContent>
      <Typography variant="h5" gutterBottom>
        Heading
      </Typography>
      <CardItem />
      <CardItem />
      <CardItem />
    </CardContent>
    <CardActions>
      <Button style={{ textTransform: 'capitalize' }} size="small" startIcon={<AddIcon />}>Add card</Button>
    </CardActions>
  </Card>
);

export default Column;
