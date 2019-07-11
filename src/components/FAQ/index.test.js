import React from 'react'
import { shallow } from 'enzyme'
import { findByTestAttr } from '../../test/testUtils'

import FAQ from '.'

describe('FAQ', () => {
  const setup = () => {
    const wrapper = shallow(<FAQ />)
    return wrapper
  }
  it('should render without error', () => {
    const wrapper = setup()
    const component = findByTestAttr(wrapper, 'faq-section')
    expect(component.exists()).toBeTruthy()
  })

  it('should render `FAQItems` component', () => {
    const wrapper = setup()
    const component = findByTestAttr(wrapper, 'faq-items')
    expect(component.exists()).toBeTruthy()
  })
})
