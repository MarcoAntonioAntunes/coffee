import React from 'react';
import ReactDOM from 'react-dom';
import Pairings from './Pairings';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Pairings />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('matches component to snapshot', () => {
  const component = renderer.create(<Pairings></Pairings>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});