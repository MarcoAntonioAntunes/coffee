import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Card from './Card';


it('should match the Card  component to snapshot', () => {
    const component = renderer.create(
        <Card />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

it('should render the Card component', () => {
    configure({ adapter: new Adapter() });
    const component = shallow(
        <Card />
    );
    const componentChildDiv = component.children().getElements()[1];
    expect(componentChildDiv.props.className).toEqual('link');
});