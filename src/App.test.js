import React from 'react';
import App from './App';
import {cleanup, render} from '@testing-library/react';

afterEach(cleanup);

function renderApp() {
  return render(<App/>);
}

it('should render app', () => {
  const {getByText} = renderApp();
  getByText('Retropolis');
});
