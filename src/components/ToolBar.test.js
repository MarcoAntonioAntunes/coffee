import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ToolBar from './ToolBar';


it('should match the ToolBar  component to snapshot', () => {
    const component = renderer.create(
        <ToolBar />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

it('should render the ToolBar component', () => {
    configure({ adapter: new Adapter() });
    const component = shallow(
        <ToolBar />
    );
    const componentChildDiv = component.children().getElements()[1];
    expect(component.getElement().props.className).toEqual('location-toggle');
    expect(componentChildDiv.props.className).toEqual('toggle-button');
});