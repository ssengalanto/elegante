import PropTypes from 'prop-types'
import React, { Fragment } from 'react'
import styles from './faq.module.scss'

const FAQItems = ({ faq, openAccordionWindow, id }) => (
  <>
    {faq.map(faqs => (
      <Fragment key={faqs.id}>
        <button
          data-test="faq-question"
          id={`${faqs.id}-label`}
          type="button"
          className={styles.question}
          onClick={() => openAccordionWindow(faqs.id)}
          aria-expanded={id === faqs.id}
          aria-controls={`${faqs.id}-control`}
        >
          <span className={styles.icon} aria-label="question">
            Q
          </span>
          <h2 className={styles.heading}>{faqs.question}</h2>
          <span
            className={`${styles['btn-icon']} ${id === faqs.id && styles.open}`}
          />
        </button>
          {id === faqs.id ? (
            <div
              id={`${faqs.id}-control`}
              role="region"
              aria-labelledby={`${faqs.id}-label`}
            >
              <p className={styles.answer} data-test="faq-answer">
                {faqs.answer}
              </p>
            </div>
          ) : null}
      </Fragment>
    ))}
  </>
)

FAQItems.propTypes = {
  id: PropTypes.string.isRequired,
  openAccordionWindow: PropTypes.func.isRequired,
  faq: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      question: PropTypes.string,
      answer: PropTypes.string
    })
  ).isRequired
}

export default FAQItems
