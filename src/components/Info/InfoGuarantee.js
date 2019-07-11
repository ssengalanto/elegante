import React from 'react'
import content from '../../utilities/content/content'
import CheckBoxIcon from '../SVGs/svg-icons/CheckBoxIcon'
import styles from './info.module.scss'

const InfoGuarantee = () => (
  <section className={styles.section}>
    <div className={styles.content}>
      <h1 className={styles.title}>
        <span className="fw-thin">Guarantee </span>
        <span className="fw-regular">&amp; After-Sales Service</span>
      </h1>
      <p>{content.loremOne}</p>

      <div className={styles.separator} />

      <h2 className={styles.heading}>
        What Products are Provided with the Warranty?
      </h2>
      <p>{content.loremTwo}</p>

      <div className={styles.flex}>
        <CheckBoxIcon />
        <h3 className={styles['sub-heading']}>Is shipping free?</h3>
      </div>
      <p>{content.loremTwo}</p>

      <div className={styles.flex}>
        <CheckBoxIcon />
        <h3 className={styles['sub-heading']}>Can I track my order?</h3>
      </div>
      <p>{content.loremTwo}</p>

      <div className={styles.flex}>
        <CheckBoxIcon />
        <h3 className={styles['sub-heading']}>
          Where does my order ship from?
        </h3>
      </div>
      <p>{content.loremTwo}</p>

      <div className={styles.separator} />

      <h3 className={styles.heading}>Change and Return</h3>
      <p>{content.loremTwo}</p>
    </div>
  </section>
)

export default InfoGuarantee
