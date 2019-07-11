import React, { useEffect } from 'react'
import styles from './info-loader.module.scss'

const InfoLoader = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <div className={`${styles.heading} loading w-40 `} />
        <div className={`${styles.line} loading w-100`} />
        <div className={`${styles.line} loading w-80`} />
        <div className={`${styles.line} loading w-90`} />
        <div className={`${styles.line} loading w-70`} />
        <div className={`${styles.line} ${styles.landscape} loading w-80 `} />
        <div className={`${styles.line} ${styles.portrait} loading w-70 `} />
        <div className={`${styles.line} ${styles.portrait} loading w-50 `} />

        <div className={`${styles.title} loading w-30`} />
        <div className={`${styles.line} loading w-90`} />
        <div className={`${styles.line} loading w-70`} />
        <div className={`${styles.line} ${styles.portrait} loading w-50 `} />

        <div className={`${styles.title} loading w-30`} />
        <div className={`${styles.line} loading w-90`} />
        <div className={`${styles.line} loading w-70`} />
        <div className={`${styles.line} ${styles.portrait} loading w-50 `} />

        <div className={`${styles.title} loading w-30`} />
        <div className={`${styles.line} loading w-90`} />
        <div className={`${styles.line} loading w-70`} />
        <div className={`${styles.line} ${styles.portrait} loading w-50 `} />
      </div>
    </section>
  )
}

export default InfoLoader
