import React from 'react';
import styled from 'styled-components';
import RetroCard from './RetroCard';
import CreateCard from './CreateCard';

export default function Column() {
  const ListContainer = styled.div`
  background-color: #dfe3e6;
  border-radius: 3px;
  width: 300px;
  padding: 8px;
  height: 100%;
  margin: 0 8px 0 0;
`;
  return (
    <ListContainer>
      <div>
        <RetroCard />
        <CreateCard />
      </div>
    </ListContainer>
  );
}
