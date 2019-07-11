import React from 'react'
import HomepageSubscribeForm from '../HomeSubscribeForm'
import styles from './home-subscribe.module.scss'

const HomeSubscribe = () => (
  <section className={styles.section}>
    <div className={styles.content}>
      <div className={styles.column}>
        <h2 className={styles.heading}>
          <p className="fw-thin">Get the latest news</p>
          <p className="fw-semi-bold">Subscribe now!</p>
        </h2>
        <HomepageSubscribeForm />
      </div>
    </div>
    <div className={styles.background} />
  </section>
)

export default HomeSubscribe
