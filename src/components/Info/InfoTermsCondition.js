import React from 'react'
import content from '../../utilities/content/content'
import CheckBox from '../SVGs/svg-icons/CheckBoxIcon'
import styles from './info.module.scss'

const InfoTermsCondition = () => (
  <section className={styles.section}>
    <div className={styles.content}>
      <h1 className={styles.title}>
        <span className="fw-thin">Terms</span>{' '}
        <span className="fw-regular">&amp; Conditions</span>
      </h1>
      <p>{content.loremOne}</p>

      <div className={styles.flex}>
        <CheckBox />
        <h2 className={styles['sub-heading']}>Rule# 1</h2>
      </div>
      <p>{content.loremTwo}</p>

      <div className={styles.flex}>
        <CheckBox />
        <h2 className={styles['sub-heading']}>Rule# 2</h2>
      </div>
      <p>{content.loremTwo}</p>

      <div className={styles.flex}>
        <CheckBox />
        <h2 className={styles['sub-heading']}>Rule# 3</h2>
      </div>
      <p>{content.loremTwo}</p>

      <div className={styles.flex}>
        <CheckBox />
        <h2 className={styles['sub-heading']}>Rule# 4</h2>
      </div>
      <p>{content.loremTwo}</p>
    </div>
  </section>
)

export default InfoTermsCondition
