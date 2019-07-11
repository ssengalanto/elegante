import React from 'react'
import content from '../../utilities/content/content'
import CheckBox from '../SVGs/svg-icons/CheckBoxIcon'
import styles from './info.module.scss'

const InfoSecurePayment = () => (
  <section className={styles.section}>
    <div className={styles.content}>
      <h1 className={styles.title}>
        <span className="fw-thin">Secure</span>{' '}
        <span className="fw-regular">Payment</span>
      </h1>
      <p>{content.loremOne}</p>

      <div className={styles.flex}>
        <CheckBox />
        <h2 className={styles['sub-heading']}>SSL Certificate</h2>
      </div>
      <p>{content.loremTwo}</p>

      <div className={styles.flex}>
        <CheckBox />
        <h2 className={styles['sub-heading']}>Multiple Gateways</h2>
      </div>
      <p>{content.loremTwo}</p>

      <div className={styles.flex}>
        <CheckBox />
        <h2 className={styles['sub-heading']}>24/7 Customer Support</h2>
      </div>
      <p>{content.loremTwo}</p>
    </div>
  </section>
)

export default InfoSecurePayment
