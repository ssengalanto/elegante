import React from 'react'
import styles from './content-loader.module.scss'

const ContentLoader = () => (
  <div className={styles.spinner}>
    <div className={styles.dot1} />
    <div className={styles.dot2} />
  </div>
)

export default ContentLoader
