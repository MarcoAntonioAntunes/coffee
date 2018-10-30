import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DisplayBox from './DisplayBox';


it('should match the DisplayBox  component to snapshot', () => {
    const component = renderer.create(
        <DisplayBox
            officeToggle={true}
            isDublinPairingsLoading={false}
            dublinPairings={[]}
            isNewYorkPairingsLoading={false}
            newYorkPairings={[]}
        />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

it('should render the New york component when the toggle button is off', () => {
    configure({ adapter: new Adapter() });
    const component = shallow(
        <DisplayBox
            officeToggle={false}
            isDublinPairingsLoading={false}
            dublinPairings={[]}
            isNewYorkPairingsLoading={false}
            newYorkPairings={[]}
        />
    );
    const componentChildDiv = component.children().getElements()[0];
    expect(componentChildDiv.props.className).toEqual('newyork');
});


it('should render the Dublin component when the toggle button is off', () => {
    configure({ adapter: new Adapter() });
    const component = shallow(
        <DisplayBox
            officeToggle={true}
            isDublinPairingsLoading={false}
            dublinPairings={[]}
            isNewYorkPairingsLoading={false}
            newYorkPairings={[]}
        />
    );
    const componentChildDiv = component.children().getElements()[0];
    expect(componentChildDiv.props.className).toEqual('dublin');
});