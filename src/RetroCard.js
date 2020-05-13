import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import styled from 'styled-components';

export default function RetroCard() {
  const CardContainer = styled.div`
    margin: 0 0 8px 0;
    position: relative;
    max-width: 100%;
    word-wrap: break-word;
  `;

  return (
    <CardContainer>
      <Card>
        <CardContent>
          <Typography>Hello</Typography>
        </CardContent>
      </Card>
    </CardContainer>
  );
}
