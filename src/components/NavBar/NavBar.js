import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  root: {
    marginBottom: '10px'
  },
  link: {
    color: 'white',
    textDecoration: 'none'
  }
}));

const NavBar = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.root} position="static">
      <Toolbar>
        <Link to="/" className={classes.link}>
          <Typography variant="h6">
            Retropolis
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
