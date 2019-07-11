/* eslint-disable jsx-a11y/label-has-for */
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import styles from './shop-filter.module.scss'

const ShopFilterBar = memo(({ filterChangeHandler, price }) => (
  <div className={styles.container}>
    <div className="line-separator mb-3" />
    <label htmlFor="filter-name" className={styles.label}>
      Search
      <input
        id="filter-name"
        name="search"
        type="search"
        placeholder="Search"
        onChange={filterChangeHandler}
        className={styles.input}
      />
    </label>
    <div className="line-separator my-3" />
    <label htmlFor="filter-size" className={styles.label}>
      Filter by size
      <select
        id="filter-size"
        type="select"
        name="size"
        onChange={filterChangeHandler}
        className={styles.input}
      >
        <option value="">-- Select size --</option>
        <option value="extra small">Extra Small</option>
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
        <option value="extra large">Extra Large</option>
      </select>
    </label>
    <div className="line-separator my-3" />
    <label htmlFor="filter-brand" className={styles.label}>
      Filter by brand
      <select
        id="filter-brand"
        type="select"
        name="brand"
        onChange={filterChangeHandler}
        className={styles.input}
      >
        <option value="">-- Select brand --</option>
        <option value="h&amp;m">H&amp;M</option>
        <option value="memo">Memo</option>
        <option value="penshoppe">Penshoppe</option>
        <option value="uniqlo">Uniqlo</option>
      </select>
    </label>
    <div className="line-separator my-3" />
    <label htmlFor="filter-price" className={styles.label}>
      Filter by price (${price || 200})
      <input
        id="filter-price"
        type="range"
        name="price"
        value={price || 200}
        onChange={filterChangeHandler}
        min="0"
        max="200"
        step="10"
        className={styles['input-range']}
      />
    </label>
  </div>
))

ShopFilterBar.propTypes = {
  price: PropTypes.number.isRequired,
  filterChangeHandler: PropTypes.func.isRequired
}

export default ShopFilterBar
