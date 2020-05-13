import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { afterEach, it } from '@jest/globals';
import App from './App';

afterEach(cleanup);

function renderApp() {
  return render(<App />);
}

it('should render app', () => {
  const { getByText } = renderApp();
  getByText('Retropolis');
});
