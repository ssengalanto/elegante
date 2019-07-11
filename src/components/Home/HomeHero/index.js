import React from 'react'
import styles from './home-hero.module.scss'

const Hero = () => (
  <section className={styles.section}>
    <div className={styles.content}>
      <div className={styles.image}>
        <h1 className={styles.slogan}>
          <span className={styles['slogan--thin']}>express</span>
          <span className={styles['slogan--bold']}>yourself</span>
        </h1>
      </div>
    </div>
  </section>
)

export default Hero
