import React, { useEffect, useState } from 'react';
import { getBoards } from '../../api/boardsApi';

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

  return fetching
    ? (<p>Fetching...</p>)
    : (<p>No boards to display</p>);
};

export default Home;
