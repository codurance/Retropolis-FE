import React from 'react';
import { afterEach, it } from '@jest/globals';
import { cleanup, render } from '@testing-library/react';
import CardItem from './CardItem';

afterEach(cleanup);

function renderCardItem(args) {
  const defaultProps = {
    cardProp: {
      id: 0,
      text: '',
      userName: ''
    }
  };
  const props = { ...defaultProps, ...args };
  return render(<CardItem {...props} />);
}

it('shows the user name on the card', () => {
  const { getByText } = renderCardItem({ cardProp: { userName: 'John Doe' } });
  getByText('John Doe');
});
