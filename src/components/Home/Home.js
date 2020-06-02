import React, { useEffect, useState } from 'react';
import { getBoards } from '../../api/boardsApi';

const Home = () => {
  const [fetching, setFetching] = useState(true);
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    getBoards().then((res) => {
      setBoards(res);
      setFetching(false);
    });
  }, []);

  return fetching
    ? (<p>Fetching...</p>)
    : (<p>No boards to display</p>);
};

export default Home;
