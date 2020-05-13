import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import styled from 'styled-components';

export default function RetroCard() {
  const ListContainer = styled.div`
  background-color: #dfe3e6;
  border-radius: 3px;
  width: 300px;
  padding: 8px;
  height: 100%;
  margin: 0 8px 0 0;
`;

  const CardContainer = styled.div`
    margin: 0 0 8px 0;
    position: relative;
    max-width: 100%;
    word-wrap: break-word;
  `;

  return (
    <ListContainer>
      <CardContainer>
        <Card>
          <CardContent>
            <Typography>Hello</Typography>
          </CardContent>
        </Card>
      </CardContainer>
    </ListContainer>
  );
}
