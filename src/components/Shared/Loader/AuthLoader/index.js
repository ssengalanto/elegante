import React from 'react'
import styles from './auth-loader.module.scss'

const AuthLoader = () => (
  <div className={styles.container}>
    <div className={styles.ellipsis}>
      <div />
      <div />
      <div />
      <div />
    </div>
    <p className={styles.text}>Loading</p>
  </div>
)

export default AuthLoader
