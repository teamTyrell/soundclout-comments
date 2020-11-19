import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ArtistInfo from './ArtistInfo';

Enzyme.configure({ adapter: new Adapter() });

describe('<ArtistInfo />', () => {

  it('renders <ArtistInfo />', () => {

    const component = renderer.create(<ArtistInfo />);

    expect(component.toJSON()).toMatchSnapshot();

  });

});