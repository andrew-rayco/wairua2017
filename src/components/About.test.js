import React from 'react'
import { shallow } from 'enzyme'
import About from './About'

describe('<About /> component', () => {
  const app = shallow(<About />)

  it('renders correctly', () => {
    expect(app).toMatchSnapshot()
  })
})
