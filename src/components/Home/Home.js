import React, { useEffect, useState } from 'react';
import { getBoards } from '../../api/boardsApi';

const renderBoards = (boards) => boards.map((board) => <p key={board.id}>{board.title}</p>);

const Home = () => {
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

  if (error) return <p>Failed to get boards</p>;

  if (fetching) return <p>Fetching...</p>;

  return boards.length
    ? (renderBoards(boards))
    : (<p>No boards to display</p>);
};

export default Home;
