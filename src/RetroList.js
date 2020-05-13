import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import styled from 'styled-components';
import RetroCard from './RetroCard';

export default function RetroList() {
  const ListContainer = styled.div`
  background-color: #dfe3e6;
  border-radius: 3px;
  width: 300px;
  padding: 8px;
  height: 100%;
  margin: 0 8px 0 0;
`;

  const OpenFormButton = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    border-radius: 3px;
    height: 36px;
    margin-left: 8px;
    width: 300px;
    padding-left: 10px;
    padding-right: 10px;
    opacity: 0.5;
    color: inherit;
    background-color: inherit;
  `;

  return (
    <ListContainer>
      <div>
        <RetroCard />
        <OpenFormButton>
          <AddIcon />
          <p style={{ flexShrink: 0 }}>Add another card </p>
        </OpenFormButton>
      </div>
    </ListContainer>
  );
}
