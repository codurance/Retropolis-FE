import React, { useEffect, useState } from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import * as PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import AddBoardModal from '../AddBoardModal/AddBoardModal';
import { getBoards } from '../../api/boardsApi';

const useStyles = makeStyles(() => ({
  body: {
    backgroundColor: '#f6f5f5'
  },
  content: {
    fontSize: 20
  }
}));

const Home = ({ history }) => {
  const classes = useStyles();
  const [fetching, setFetching] = useState(true);
  const [boards, setBoards] = useState([]);
  const [error, setError] = useState(false);
  function fetchBoards() {
    getBoards().then((res) => {
      setBoards(res);
      setFetching(false);
    }).catch((err) => {
      if (err.status === 401) {
        history.push('/login');
      } else {
        setError(true);
      }
    });
  }

  useEffect(() => {
    fetchBoards();
  }, []);

  const renderBoards = () => (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={3} key={0}>
          <Grid container justify="center">
            <AddBoardModal history={history} />
          </Grid>
        </Grid>
        {boards.map((board) => (
          <Grid item xs={12} sm={3} key={board.id}>
            <Link to={'/' + board.id}>
              <Card className={classes.body}>
                <CardActionArea>
                  <CardContent className={classes.content}>
                    {board.title}
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </>
  );

  if (error) return <p>Failed to get boards</p>;

  if (fetching) return <p>Fetching...</p>;

  return boards.length
    ? (renderBoards())
    : (<p>No boards to display</p>);
};

const history = PropTypes.shape({
  push: PropTypes.func.isRequired
});

Home.propTypes = {
  history: history.isRequired
};

export default Home;
