import * as React from 'react';
import * as ReactDOM from 'react-dom';
import DatePicker from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DatePicker />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
