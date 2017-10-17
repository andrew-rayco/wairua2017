import React from 'react';
import { shallow, mount } from 'enzyme'
import App from './App';

describe('<App/> component', () => {
  const app = shallow(<App />);

  it('renders without crashing', () => {
    expect(app.length).toEqual(1)
  });

  it('renders correctly', () => {
    expect(app).toMatchSnapshot()
  })

  it('renders a div with a class of container', () => {
    expect(app.find('.container').exists()).toBe(true)
  })

  it('renders a div with a class of App', () => {
    expect(app.find('.App').exists()).toBe(true)
  })

})

describe('<App/> component mounted has 7 children', () => {
  const app = mount(<App />)

  it('renders all seven children', () => {
    expect(app.find('.container').children().length).toEqual(7)
  })
})
