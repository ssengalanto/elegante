import React from 'react'
import content from '../../utilities/content/content'
import styles from './contact.module.scss'
import ContactForm from './ContactForm'
import ContactInfo from './ContactInfo'

const Contact = () => (
  <section className={styles.section}>
    <div className={styles.content}>
      <div className={styles.column}>
        <h1 className={styles.title}>
          <span className="fw-thin">Get</span>
          <span className="fw-regular"> in touch</span>
        </h1>
        <p>{content.loremFive}</p>
        <ContactInfo />
      </div>
      <div className={styles.column}>
        <ContactForm />
      </div>
    </div>
  </section>
)

export default Contact
