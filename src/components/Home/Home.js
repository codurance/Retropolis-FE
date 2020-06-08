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
import { redirectToLogin } from '../../services/loginService';

const useStyles = makeStyles(() => ({
  body: {
    backgroundColor: '#f6f5f5',
    minHeight: '60px'
  },
  container: {
    padding: '16px'
  },
  content: {
    fontSize: 20,
    textAlign: 'center',
    padding: '20px'
  },
  link: {
    color: 'white',
    textDecoration: 'none'
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
        redirectToLogin(history);
      } else {
        setError(true);
      }
    });
  }

  useEffect(() => {
    fetchBoards();
  }, []);

  const renderBoards = () => (
    <div className={classes.container}>
      <AddBoardModal history={history} />
      <Grid container spacing={3}>
        {boards.map((board) => (
          <Grid item xs={12} sm={2} key={board.id}>
            <Link to={'/' + board.id} className={classes.link}>
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
    </div>
  );

  if (error) return <p>Failed to get boards</p>;

  if (fetching) return <p>Fetching...</p>;

  return renderBoards();
};

const history = PropTypes.shape({
  push: PropTypes.func.isRequired
});

Home.propTypes = {
  history: history.isRequired
};

export default Home;
