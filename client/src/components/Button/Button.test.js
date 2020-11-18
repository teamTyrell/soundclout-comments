import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from './Button';

Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {

  it('renders <Button />', () => {

    const component = renderer.create(<Button />);

    expect(component.toJSON()).toMatchSnapshot();

  });

});