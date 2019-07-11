/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import styles from './shop-filter.module.scss'

const ShopFilterSort = memo(({ filterChangeHandler }) => (
  <div>
    <label htmlFor="sort-products" className="sr-only">
      Sort
    </label>
    <select
      id="sort-products"
      type="select"
      name="sort"
      onChange={filterChangeHandler}
      className={styles.sort}
    >
      <option value="">Sort</option>
      <option value="a-z">Name, A-Z</option>
      <option value="z-a">Name, Z-A</option>
      <option value="low-high">Price, Low-High</option>
      <option value="high-low">Price, High-Low</option>
      <option value="new-old">Date, New-Old</option>
      <option value="old-new">Date, Old-New</option>
    </select>
  </div>
))

ShopFilterSort.propTypes = {
  filterChangeHandler: PropTypes.func.isRequired
}

export default ShopFilterSort
