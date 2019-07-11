import React from 'react'
import { shallow } from 'enzyme'
import { findByTestAttr } from '../../test/testUtils'

import FAQItems from './FAQItems'

describe('FAQItems', () => {
  const defaultProps = {
    id: '',
    openAccordionWindow: jest.fn(),
    faq: [
      {
        id: 'faq-01',
        question: 'question-01',
        answer: 'answer 01'
      },
      {
        id: 'faq-02',
        question: 'question-02',
        answer: 'answer 02'
      },
      {
        id: 'faq-03',
        question: 'question-03',
        answer: 'answer 03'
      }
    ]
  }

  const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props }
    return shallow(<FAQItems {...setupProps} />)
  }

  it('should render `questions` as many times as the faq.length', () => {
    const wrapper = setup()
    const component = findByTestAttr(wrapper, 'faq-question')
    expect(component).toHaveLength(defaultProps.faq.length)
  })

  it('should not render `answer` with an id that has falsy values', () => {
    const wrapper = setup({ id: '' })
    const answer = findByTestAttr(wrapper, 'faq-answer')
    expect(answer).toHaveLength(0)
  })

  it('should render `answer` with an id equals to props.id', () => {
    const wrapper = setup({ id: 'faq-01' })
    const answer = findByTestAttr(wrapper, 'faq-answer')
    expect(answer.text()).toMatch('answer 01')
    expect(answer).toHaveLength(1)
  })

  it('should pass the element id as an argument on click', () => {
    const wrapper = setup()
    const mock = jest.fn()
    const element = 1
    wrapper
      .find('button')
      .at(element)
      .simulate('click', mock(defaultProps.faq[element].id))

    expect(mock).toHaveBeenCalledWith(defaultProps.faq[element].id)
    expect(mock).toBeCalledTimes(1)
  })
})
