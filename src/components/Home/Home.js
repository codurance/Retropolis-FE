import React, { useEffect, useState } from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import { getBoards } from '../../api/boardsApi';

const useStyles = makeStyles(() => ({
  body: {
    backgroundColor: '#f6f5f5'
  },
  content: {
    fontSize: 20
  }
}));

const Home = () => {
  const classes = useStyles();
  const [fetching, setFetching] = useState(true);
  const [boards, setBoards] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    getBoards().then((res) => {
      setBoards(res);
      setFetching(false);
    }).catch(() => {
      setError(true);
    });
  }, []);

  const renderBoards = () => (
    <GridList cellHeight={160} cols={4}>
      {boards.map((board) => (
        <GridListTile key={board.id} cols={1}>
          <Link href={'/' + board.id}>
            <Card className={classes.body}>
              <CardActionArea>
                <CardContent className={classes.content}>
                  {board.title}
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        </GridListTile>
      ))}
    </GridList>
  );

  if (error) return <p>Failed to get boards</p>;

  if (fetching) return <p>Fetching...</p>;

  return boards.length
    ? (renderBoards())
    : (<p>No boards to display</p>);
};

export default Home;
