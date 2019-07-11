import React from 'react'
import content from '../../utilities/content/content'
import CheckBox from '../SVGs/svg-icons/CheckBoxIcon'
import styles from './info.module.scss'

const InfoCustomerSupport = () => (
  <section className={styles.section}>
    <div className={styles.content}>
      <h1 className={styles.title}>
        <span className="fw-thin">Customer</span>{' '}
        <span className="fw-regular">Support</span>
      </h1>
      <p>{content.loremOne}</p>

      <div className={styles.flex}>
        <CheckBox />
        <h2 className={styles['sub-heading']}>Knowledge Base</h2>
      </div>
      <p>{content.loremTwo}</p>

      <div className={styles.flex}>
        <CheckBox />
        <h2 className={styles['sub-heading']}>Community Forums</h2>
      </div>
      <p>{content.loremTwo}</p>

      <div className={styles.flex}>
        <CheckBox />
        <h2 className={styles['sub-heading']}>24/7 Ticket Support</h2>
      </div>
      <p>{content.loremTwo}</p>

      <div className={styles.flex}>
        <CheckBox />
        <h2 className={styles['sub-heading']}>Contact</h2>
      </div>
      <p>{content.loremTwo}</p>
    </div>
  </section>
)

export default InfoCustomerSupport
