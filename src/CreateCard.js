import AddIcon from '@material-ui/icons/Add';
import React, { useState } from 'react';
import styled from 'styled-components';
import TextareaAutosize from 'react-textarea-autosize';

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

function EditCard() {
  return (
    <>
      <TextareaAutosize />
      <OpenFormButton>
        <p style={{ flexShrink: 0 }}>
          Save card
        </p>
      </OpenFormButton>
    </>
  );
}

export default function CreateCard() {
  const [editing, setEditing] = useState(false);

  return !editing ? (
    <OpenFormButton onClick={() => setEditing(true)}>
      <AddIcon />
      <p style={{ flexShrink: 0 }}>
        Add another card
      </p>

    </OpenFormButton>
  ) : <EditCard />;
}
