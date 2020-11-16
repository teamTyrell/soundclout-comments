import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {

  it('renders <App />', () => {

    const component = renderer.create(<App />);

    expect(component.toJSON()).toMatchSnapshot();

  });

});
