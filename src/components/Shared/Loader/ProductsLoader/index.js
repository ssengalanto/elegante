import React from 'react'
import styles from './products-loader.module.scss'

const ProductsLoader = () => (
  <div className={styles.content}>
    <div className={styles.container}>
      <div className={`${styles.image} loading `} />
      <div className={`${styles.brand} loading w-30`} />
      <div className={`${styles.name} loading w-60`} />
      <div className={`${styles.price} loading w-20`} />
    </div>
    <div className={styles.container}>
      <div className={`${styles.image} loading `} />
      <div className={`${styles.brand} loading w-30`} />
      <div className={`${styles.name} loading w-60`} />
      <div className={`${styles.price} loading w-20`} />
    </div>
    <div className={styles.container}>
      <div className={`${styles.image} loading `} />
      <div className={`${styles.brand} loading w-30`} />
      <div className={`${styles.name} loading w-60`} />
      <div className={`${styles.price} loading w-20`} />
    </div>
    <div className={styles.container}>
      <div className={`${styles.image} loading `} />
      <div className={`${styles.brand} loading w-30`} />
      <div className={`${styles.name} loading w-60`} />
      <div className={`${styles.price} loading w-20`} />
    </div>
    <div className={styles['extra-container']}>
      <div className={`${styles.image} loading `} />
      <div className={`${styles.brand} loading w-30`} />
      <div className={`${styles.name} loading w-60`} />
      <div className={`${styles.price} loading w-20`} />
    </div>
    <div className={styles['extra-container']}>
      <div className={`${styles.image} loading `} />
      <div className={`${styles.brand} loading w-30`} />
      <div className={`${styles.name} loading w-60`} />
      <div className={`${styles.price} loading w-20`} />
    </div>
  </div>
)

export default ProductsLoader
