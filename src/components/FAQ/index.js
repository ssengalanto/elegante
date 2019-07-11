import React, { useState } from 'react'
import content from '../../utilities/content/content'
import faq from '../../utilities/content/faq.json'
import styles from './faq.module.scss'
import FAQItems from './FAQItems'

const FAQ = () => {
  const [openWindow, setOpenWindow] = useState('faq-01')

  const openAccordionWindow = id => {
    if (id === openWindow) {
      setOpenWindow('')
    } else {
      setOpenWindow(id)
    }
  }

  return (
    <section className={styles.section} data-test="faq-section">
      <div className={styles.content}>
        <h1 className={styles.title}>
          <span className="fw-thin">Frequently </span>
          <span className="fw-regular">Asked Questions</span>
        </h1>
        <p className="mb-5">{content.loremOne}</p>
        <FAQItems
          faq={faq}
          id={openWindow}
          openAccordionWindow={openAccordionWindow}
          data-test="faq-items"
        />
      </div>
    </section>
  )
}

export default FAQ
