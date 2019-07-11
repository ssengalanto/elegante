import PropTypes from 'prop-types'
import React from 'react'
import styles from './shop-products.module.scss'

const ShopProductsLoadError = ({ error }) => (
  <p className={styles.error}>{error}</p>
)

ShopProductsLoadError.propTypes = {
  error: PropTypes.string.isRequired
}

export default ShopProductsLoadError
