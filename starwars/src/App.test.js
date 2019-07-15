
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Display from './components/Display';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});




describe('<App />', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<App />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe('<Display />', () => {
  it('should match snapshot', () => {
    const tree2 = renderer.create(<Display />).toJSON();

    expect(tree2).toMatchSnapshot();
  });
});