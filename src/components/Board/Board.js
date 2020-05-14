import React from 'react';
import Grid from '@material-ui/core/Grid';
import Column from '../Column/Column';

const Board = () => (
  <div>
    <Grid container spacing={3}>
      <Grid item xs={3}><Column /></Grid>
    </Grid>
  </div>
);

export default Board;
