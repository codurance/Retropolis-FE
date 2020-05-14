import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';

const Column = () => (
  <Card>
    <CardContent>
      <Typography variant="h5" gutterBottom>
        h5. Heading
      </Typography>
    </CardContent>
    <CardActions>
      <Button style={{ textTransform: 'capitalize' }} size="small" startIcon={<AddIcon />}>Add card</Button>
    </CardActions>
  </Card>
);

export default Column;
