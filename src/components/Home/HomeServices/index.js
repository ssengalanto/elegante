import React from 'react'
import services from '../../../utilities/content/services.json'
import styles from './home-services.module.scss'

const HomeServices = () => (
  <section className={styles.section}>
    <div className={styles.content}>
      {services.map(service => (
        <div className={styles.item} key={service.id}>
          <span className={styles.count} aria-hidden>
            {service.id}
          </span>
          <h2 className={styles.heading}>
            <span className={styles['heading--light']}>
              {service.title.text1}
            </span>
            &nbsp;
            <span className={styles['heading--bold']}>
              {service.title.text2}
            </span>
          </h2>
          <p className={`${styles['sub-heading']}`}>{service.sub}</p>
          <p>{service.text}</p>
        </div>
      ))}
    </div>
  </section>
)

export default HomeServices
