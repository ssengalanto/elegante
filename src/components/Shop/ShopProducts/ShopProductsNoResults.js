import React from 'react'
import styles from './shop-products.module.scss'

const ShopProductsNoResults = () => (
  <p className={styles.error}>
    No results found. <br />
    We can&lsquo;t seem to find any products that match your search.
  </p>
)

export default ShopProductsNoResults
